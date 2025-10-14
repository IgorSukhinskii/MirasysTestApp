import { createContext, use, type PropsWithChildren } from 'react';

import { useStorageState } from './useStorageState';

type SessionInfo = {
  access_token: string;
  access_expires_in: string;
  refresh_token: string;
  refresh_expires_in: string;
};

const AuthContext = createContext<{
  signIn: (username: string, password: string) => void;
  signOut: () => void;
  session: SessionInfo | null;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
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
          // TODO: extract into a config or something maybe?
          fetch('https://iam.mirasys.dev/auth/generate-token', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username, password
            })
          }).then(response => response.json())
            .then(response => setSession(response.data))
            .catch(error => console.error(error)) // TODO: error handling
        },
        signOut: () => {
          setSession(null);
        },
        session
      }}>
      {children}
    </AuthContext>
  );
}
