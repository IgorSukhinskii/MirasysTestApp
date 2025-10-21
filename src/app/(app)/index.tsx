import { useSession } from '@/auth/ctx';
import { Text, View } from '@/components/Themed';
import { LIST_PROFILE_NODES, ListProfileNodesQueryData } from '@/queries/listProfileNodes';

import { useQuery } from '@apollo/client/react';
import { ScrollView } from 'react-native';

function FolderView({ parentNodeId }: { parentNodeId: string | null }) {
  const { loading, error, data, fetchMore } = useQuery<ListProfileNodesQueryData>(LIST_PROFILE_NODES, {
    variables: { parentNodeId: parentNodeId, first: 10 }
  });
  console.log('Folder:', parentNodeId, data?.listProfileNodes.edges.length)

  return (
    <View style={{ marginLeft: 10 }}>
      {data?.listProfileNodes.edges.map((edge) => (
        <View key={edge.node.id}>
          <Text>{edge.node.kind} | {edge.node.name}</Text>
        </View>
      ))}
      {data?.listProfileNodes.pageInfo.hasNextPage && (
        <Text
          style={{ color: "#00f" }}
          onPress={() => {
            fetchMore({
              variables: {
                after: data.listProfileNodes.pageInfo.endCursor
              }
            })
          }}>More...</Text>
      )}
    </View>
  );
}

export default function Index() {
  const { signOut, refresh } = useSession();
  const { loading, error, data, fetchMore } = useQuery<ListProfileNodesQueryData>(LIST_PROFILE_NODES, {
    variables: { parentNodeId: null, first: 20 }
  });
  console.log('Root:', data?.listProfileNodes.edges.length);
  return (
    <ScrollView>
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
        {data?.listProfileNodes.edges.map((edge) => (
          <View key={edge.node.id}>
            <Text>{edge.node.kind} | {edge.node.name}</Text>
            {edge.node.kind === 'FolderNode' && (<FolderView parentNodeId={edge.node.id} />)}
          </View>
        ))}
      </View>
      {data?.listProfileNodes.pageInfo.hasNextPage && (
        <Text
          style={{ color: "#00f" }}
          onPress={() => {
            fetchMore({
              variables: {
                after: data.listProfileNodes.pageInfo.endCursor
              }
            })
          }}>More...</Text>
      )}
    </ScrollView>
  );
}
