import ApolloProviderWithSession from '@/components/ApolloProviderWithSession';
import { Stack } from 'expo-router';

export default function AppLayout() {
  // Provide Apollo Context only for authenticated routes
  return (
    <ApolloProviderWithSession>
      <Stack />
    </ApolloProviderWithSession>
  );
}
