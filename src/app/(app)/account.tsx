import { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { UserInfo, useSession } from '@/auth/ctx';
import { Text } from '@/components/Themed';

function UserInfoDisplay(props: { userInfo: UserInfo}) {
  return (
    <View>
      <Text style={styles.label}>Username:</Text>
      <Text style={styles.info}>{props.userInfo.username}</Text>
      <Text style={styles.label}>Public name:</Text>
      <Text style={styles.info}>{props.userInfo.publicName}</Text>
    </View>
  );
}

export default function AccountScreen() {
  const { userInfo, getUserInfo } = useSession();

  useEffect(() => getUserInfo());

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {userInfo === null
        ? <ActivityIndicator size='large' />
        : <UserInfoDisplay userInfo={userInfo} />}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  info: {
    fontSize: 20
  }
});
