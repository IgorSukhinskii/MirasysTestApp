import { useSession } from '@/auth/ctx';

import { ApolloClient, CombinedGraphQLErrors, HttpLink, InMemoryCache } from '@apollo/client';
import { SetContextLink } from '@apollo/client/link/context';
import { ErrorLink } from '@apollo/client/link/error';
import { ApolloProvider } from '@apollo/client/react';

import Constants from 'expo-constants';
import { useMemo } from 'react';

const baseUrl = Constants.expoConfig?.extra?.graphqlUrl;

const apolloHttpLink = new HttpLink({ uri: baseUrl });

export const ApolloProviderWithSession: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
  const { session, refresh } = useSession();

  // since we only provide Apollo while logged in, session should always exist
  const token = session?.access_token;

  const authLink = new SetContextLink(({ headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  });

  // Handle auth errors gracefully: refresh access_token if possible, otherwise sign out
  const authErrorLink = new ErrorLink(({ error }) => {
    if (CombinedGraphQLErrors.is(error)) {
      error.errors.forEach(({ extensions }) => {
        if (extensions?.code === 'AUTH_NOT_AUTHENTICATED') {
          // refresh will handle signing out on refresh error
          refresh();
        };
      });
    }
  });

  const client = useMemo(() => new ApolloClient({
    link: authErrorLink.concat(authLink).concat(apolloHttpLink),
    cache: new InMemoryCache(),
  }), [token]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderWithSession;
