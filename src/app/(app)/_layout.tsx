import ApolloProviderWithSession from '@/components/ApolloProviderWithSession';
import { HeaderContextMenu } from '@/components/HeaderContextMenu';
import { GLOBAL_TITLE } from '@/constants/strings';
import { Stack } from 'expo-router';

export default function AppLayout() {
  // Provide Apollo Context only for authenticated routes
  return (
    <ApolloProviderWithSession>
      <Stack screenOptions={{
        title: GLOBAL_TITLE,
        headerRight: HeaderContextMenu }}
      />
    </ApolloProviderWithSession>
  );
}
