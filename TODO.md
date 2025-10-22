# TODO

## Screens

### Splash/Index
app/_layout.tsx
A splash/loading/index screen. App always starts there. Check auth status.
If authToken exists and is not old, navigate to NodeList.
If authToken is old, refreshToken exists and is not old then refresh
authToken and navigate to NodeList.
Otherwise, navigate to Login.

### Login
Username/Password text inputs (make sure to use correct input types).
Login button. Validate non-empty inputs and authenticate.
Write tokens into a SecureStore?
Upon successful auth, navigate to NodeList (or to index?).
Display errors.

### NodeList
The big one.

Use either FlashList or react-native-tree-multi-select.
GraphQL request via apollo client.
If auth failure (401/403) then drop tokens (logout) and navigate to Login.
Difficult part: infinite scrolling nested directories.

## Dependencies

### GraphQL client
Apollo-Client
### List
FlashList, LegendList or react-native-tree-multi-select
### Some kind of request lib
Just use fetch provided with ReactNative
### UI lib?
### Icons?
### State management
Zustand
### expo-secure-store

## Tasks

### Authentication
1. ~~Implement authentication as in https://docs.expo.dev/router/advanced/authentication/~~
1. ~~Put in my own authentication logic with auth routes based on fetch()~~
1. ~~Use SecureStore to store tokens on the device~~
1. ~~Use Zustand to store tokens in memory (or Context?)~~
1. Make it pretty

### TreeView
1. ~~Implement the TreeView component~~
    - ~~Basic TreeView with collapsible directories~~
    - ~~Lazy loading and infinite scroll~~
    - ~~Allow the same in subdirectories (this is hard)~~
    - ~~Add activity indicator when loading more items~~
1. ~~Unit tests for TreeView~~
    - ~~Basic usage~~
    - ~~Fetching~~
    - ~~Infinite scroll~~
    - Infinite scroll subdir

### Main Page
1. ~~Implement GraphQL fetching logic via apollo-client~~
1. ~~Store the data in Zustand~~
1. ~~Use TreeView to display data~~
1. ~~Hook all the lazy loading functionality~~
1. Icons for content types

### Building
1. Configure Android build pipeline in devenv (try to avoid AndroidStudio)
1. Build an APK, check dev build in emulator and on device

### Extras
1. Account screen
1. Logout
1. CI config
1. Icons, splash screen
1. ~~Tests~~

### Housekeeping
1. ~~Remove all the unnecessary code and deps from the template~~
1. ~~Stop flashbanging~~
1. Handle all the TODOs in code
1. ~~Remove debug-logging~~
1. ESLint & Prettier (why didn't I start with this?)
1. Fix huge ugly nav headers
1. Cleanup on logout?
1. Bug: empty folders will always fetch on expand
