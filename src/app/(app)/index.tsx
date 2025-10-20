import { useSession } from '@/auth/ctx';
import { Text, View } from '@/components/Themed';

export default function Index() {
  const { signOut, refresh } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 200 }}>
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
    </View>
  );
}
