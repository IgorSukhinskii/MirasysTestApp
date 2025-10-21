import { useSession } from '@/auth/ctx';
import { Text, View } from '@/components/Themed';
import { TreeView } from '@/components/TreeView';



export default function Index() {
  const { signOut, refresh } = useSession();

  return (
    <View>
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
      <TreeView />
    </View>
  );
}
