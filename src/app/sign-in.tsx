import { useSession } from '@/auth/ctx';

import { TextInput } from '@/components/Themed';
import { useState } from 'react';
import { Button, View } from 'react-native';


export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useSession();

  return (
    <View style={{ flex: 1, justifyContent: 'center', gap: 20, paddingHorizontal: 40 }}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        onPress={() => {
          signIn(username, password);
        }}
        title='Sign In'
      />
    </View>
  );
}
