import { SessionProvider, useSession } from '@/auth/ctx';
import { BackgroundView } from '@/components/Themed';

import { GLOBAL_TITLE } from '@/constants/strings';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import 'react-native-reanimated';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

export default function RootLayout() {
  return (
    <SessionProvider>
      <RootNavigator />
    </SessionProvider>
  );
}

function RootNavigator() {
  const colorScheme = useColorScheme();
  const { isLoggedIn } = useSession();
  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <ThemeProvider value={theme}>
      {/* Global background themed view prevents white flashes on dark theme */}
      <BackgroundView style={{ flex: 1 }}>
        <Stack>
          <Stack.Protected guard={isLoggedIn}>
            <Stack.Screen name="(app)" options={{ headerShown: false}} />
          </Stack.Protected>

          <Stack.Protected guard={!isLoggedIn}>
            <Stack.Screen name="sign-in" options={{ title: GLOBAL_TITLE }} />
          </Stack.Protected>
        </Stack>
      </BackgroundView>
    </ThemeProvider>
  );
}
