import { useSession } from '@/auth/ctx';
import { Text, View } from '@/components/Themed';

import { gql } from "@apollo/client";
import { useQuery } from '@apollo/client/react';

type ProfileNode = {
  id: string;
  name: string;
  kind: string;
  parentNodeId: string | null;
};

type ListProfileNodesQueryData = {
  listProfileNodes: {
    nodes: [ProfileNode];
  };
};

const LIST_PROFILE_NODES = gql`
query ListProfileNodes {
  listProfileNodes(where: {parentNodeId: {eq: null}}, first: 10) {
    nodes {
      id
      name
      kind
      parentNodeId
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}`;

export default function Index() {
  const { signOut, refresh } = useSession();
  const { loading, error, data } = useQuery<ListProfileNodesQueryData>(LIST_PROFILE_NODES);
  console.log(loading, error, data);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 50 }}>
      <Text
        onPress={() => {
          signOut();
        }}>
        Sign Out
      </Text>
      <Text
        onPress={() => {
          refresh();
        }}>
        Refresh
      </Text>
      <View>
        {data?.listProfileNodes.nodes.map((node) => (
          <Text key={node.id}>{node.name} | {node.kind}</Text>
        ))}
      </View>
    </View>
  );
}
