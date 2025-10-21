# Architecture overview
The GraphQL logic here is a bit complex, so in this document I'll attempt to explain what I'm going for and why.

## The naive implementation
If we were to just implement a nested TreeView in a naive way, our component tree would look somewhat like this:

```tsx
return (
  <NodeView id="1" parentNodeId={null}>
    <NodeView id="1.1" parentNodeId="1">
      <NodeView id="1.1.1" parentNodeId="1.1">
        <NodeView id="1.1.1.1" parentNodeId="1.1.1" />
        <NodeView id="1.1.1.2" parentNodeId="1.1.1" />
        <NodeView id="1.1.1.3" parentNodeId="1.1.1" />
      </NodeView>
      <NodeView id="1.1.2" parentNodeId="1.1" />
      <NodeView id="1.1.3" parentNodeId="1.1" />
    </NodeView>
  </NodeView>
  <NodeView id="2" parentNodeId={null} />
);
```

This has a benefit of straightforwardly mirroring our GraphQL data layer (which has one paginated query per parentNodeId).
It's also simple to implement.

However, it is not performant and not very compatible with performance-focused React Native lists (such as FlashList or LegendList)

## The problem
The core problem here is that performant, fast-scrolling lists require a flat hierarchy of components of similar, predictable size.
This way FlashList for example can recycle its child views without reallocating potentially hundreds of them on each scroll.
Storing the entire component hierarchy at once also becomes infeasible with infinitely scrolling auto-paginated lists, so some recycling is necessary for large hierarchies numbering in the thousands.
While it's simple to develop, it's not production-grade material.

## The solution
It's conceptually very simple: let's just flatten the hierarchy and add a `level` prop that controls our `marginLeft` so that we can display nested structure.

```tsx
return (
  <NodeView id="1"       level={0} parentNodeId={null} />
  <NodeView id="1.1"     level={1} parentNodeId="1" />
  <NodeView id="1.1.1"   level={2} parentNodeId="1.1" />
  <NodeView id="1.1.1.1" level={3} parentNodeId="1.1.1" />
  <NodeView id="1.1.1.2" level={3} parentNodeId="1.1.1" />
  <NodeView id="1.1.1.3" level={3} parentNodeId="1.1.1" />
  <NodeView id="1.1.2"   level={2} parentNodeId="1.1" />
  <NodeView id="1.1.3"   level={2} parentNodeId="1.1" />
  <NodeView id="2"       level={0} parentNodeId={null} />
);
```

With this structure, all of our performance problems are solved: all the items exist within the same FlatList (or FlashList, or LegendList or whatever). All the items have the same height, so scrolling performance can be optimized to the highest degree. Because we have no nesting and no infinitely deep hierarchies, we do not have memory concerns when the folders and subfolders become huge. Let's not forget that even on fast devices performance affects battery life, so this implementation is literally more energy-efficient.

## The complications
Okay, now what? The idea is fine, but our graphQL data layer currently gives us one cached paginated query per `parentNodeId`.
Logically, it still makes sense, since we want to keep track of individual subfolders' pagination state (is there still more elements left to fetch or are we done?). And we want to enable infinitely scrolling subfolders which means we make new requests when the subfolder's last child is (almost) in view.

So we need to maintain the existing GraphQL fetching logic and slap another, local-only flat list on top of it that does the following things:

1. Keep the order of elements that respects the hierarchy.
   That means that children go directly after their parent folder.
   It also means that collapsing removes all the direct and indirect children from after the folder.
1. Handle new data coming in.
1. Keep track of visibility of each item.
1. Be performant, do not scan the entire tree recursively on render.

## Tech choices
Our performance-oriented lists (FlatList, FlashList, LegendList) are mostly API-compatible so we can stick with FlatList for now and drop in a replacement after we're done (preferably we would also benchmark our performance on a prod build but we'll see about that).

Now, our GraphQL client is a much bigger choice. It's not just about handling request-response side of the equation, it's also responsible for caching and for in-memory representation of our data. So it's effectively a core component of our app around which everything orbits, and is therefore the most important choice we're making.

### Apollo
I've started with Apollo as a kind of default choice, but I've quickly realized that doing this tree-list duality thing is getting increasingly complex.

In short, what we need to do in order to achieve that is:
1. A custom config for `InMemoryCache` with a relay-style merge function that correctly handles `parentNodeId` as a discriminator.
1. A custom query that never hits the network and fetches flat nodes.
1. A custom logic that keeps track of fetches, merges, collapsing/expanding folders and keeps the flat list in a current state. 

### Relay
Relay needs mostly the same stuff but it correctly handles pagination out of the box (since our API provides relay-style PageInfo). It also gives us Fragments which allow us to nicely encode the nested structure.

### URQL / ReactQuery / etc...
See no reason to switch

### Tech choices: conclusion
Either switch to Relay or stick with Apollo. I'll update it with the result after I'm done trying things out.
