import { createContext, use, type PropsWithChildren } from 'react';

import { apiFetch, FetchError } from '@/utils/apiFetch';
import { useStorageState } from './useStorageState';

// instead of calculating token expiration time, we just do this:
//   - try existing access_token
//   - on fail, try refresh (see @components/ApolloProviderWithSession)
//   - on refresh fail, sign out
// therefore, *_expires_in fields are not needed by our app
type SessionInfo = {
  access_token: string;
  // access_expires_in: string;
  refresh_token: string;
  // refresh_expires_in: string;
};

type SessionResponse = {
  data: SessionInfo;
}

const AuthContext = createContext<{
  signIn: (username: string, password: string) => void;
  signOut: () => void;
  refresh: () => void;
  session: SessionInfo | null;
  isLoggedIn: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  refresh: () => null,
  session: null,
  isLoggedIn: false,
});

export function useSession() {
  const value = use(AuthContext);
  if (!value) {
    throw new Error('useSession must be wrapped in a <SessionProvider />');
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useStorageState<SessionInfo>('session');

  return (
    <AuthContext
      value={{
        signIn: (username, password) => {
          apiFetch<SessionResponse>('/auth/generate-token', { username, password })
            .then(response => setSession(response.data))
            .catch((error: FetchError) => console.error(error)); // TODO: display auth errors
        },
        signOut: () => {
          setSession(null);
        },
        refresh: () => {
          // we know that refresh is only supposed to be called while signed in
          // however, in the spirit of defensive coding, we check session anyways
          if (session === null) {
            console.error('Tried calling refresh() while signed out');
            return;
          }
          apiFetch<SessionResponse>('/auth/refresh-token', { refreshToken: session?.refresh_token })
            .then(response => {
              setSession(response.data)
            })
            .catch((error: FetchError) => {
              if (error.code === 'HTTP_ERROR' && error.status === 400) { // INVALID_REFRESH_TOKEN
                console.log('Invalid refresh token. Signing out...');
                setSession(null);
              } else {
                console.error(error);
              }
            });
        },
        session,
        isLoggedIn: session !== null
      }}>
      {children}
    </AuthContext>
  );
}
