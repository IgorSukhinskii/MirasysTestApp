import { create } from 'zustand';

export type Node = {
  id: string;
  name: string;
  kind: string;
  parentNodeId: string | null;
};

export type VisibleTreeNode = {
  node: Node;
  level: number;
}

export type PageInfo = {
  endCursor: string | null;
  hasNextPage: boolean;
};

type TreeState = {
  expanded: Record<string, boolean>;
  setExpanded: (id: string, expanded: boolean) => void;

  loading: Record<string, boolean>;
  setLoading: (id: string, loading: boolean) => void;

  visibleFlatNodes: VisibleTreeNode[];

  nodesByRoot: Record<string, Node[]>;
  setNodesByRoot: (rootId: string, nodes: Node[]) => void;

  pageInfoByRoot: Record<string, PageInfo>;
  setPageInfoByRoot: (rootId: string, pageInfo: PageInfo) => void;

  resetStore: () => void;
};

function flattenTree(nodes: Record<string, Node[]>, expanded: Record<string, boolean>) {
  const rootId = '__root__'; // special root id that we use instead of parentNodeId == null
  const result: VisibleTreeNode[] = [];

  function flattenTreeRec(root: string, level: number) {
    // we do not display contents of non-dirs or dirs which are not expanded
    if (!nodes[root] || !expanded[root]) return;
    for (const node of nodes[root]) {
      result.push({ node, level });
      flattenTreeRec(node.id, level + 1);
    }
  }
  flattenTreeRec(rootId, 0);

  return result;
}

export const useTreeStore = create<TreeState>()(set => ({
  expanded: {},
  setExpanded(id, isExpanded) {
    set(s => {
      const expanded = {
        ...s.expanded,
        [id]: isExpanded
      };

      const visibleFlatNodes = flattenTree(s.nodesByRoot, expanded);

      return { expanded, visibleFlatNodes }
    });
  },

  loading: {},
  setLoading(id, loading) {
    set(s => ({
      loading: {
        ...s.loading,
        [id]: loading
      }
    }));
  },

  visibleFlatNodes: [],
  
  nodesByRoot: {},
  setNodesByRoot(rootId, nodes) {
    set(s => {
      const nodesByRoot = {
        ...s.nodesByRoot,
        [rootId]: nodes
      };
      const visibleFlatNodes = flattenTree(nodesByRoot, s.expanded);

      return { nodesByRoot, visibleFlatNodes };
    });
  },

  pageInfoByRoot: {},
  setPageInfoByRoot(rootId, pageInfo) {
    set(s => ({
      pageInfoByRoot: {
        ...s.pageInfoByRoot,
        [rootId]: pageInfo
      }
    }));
  },

  resetStore() {
    set(s => ({
      expanded: {},
      loading: {},
      nodesByRoot: {},
      pageInfoByRoot: {},
      visibleFlatNodes: [],
    }));
  },
}));
