# Overview

This repo contains a source code for a React Native app that I did as a test task.
It does JWT sign in, hits a GraphQL endpoint and displays the data in a tree-like list with collapsible folders and infinite scrolling.

You can read more about the list architecture in [ARCHITECTURE.md](/ARCHITECTURE.md).

# Running the app

The simplest way to run it is by using Expo Go app on your device.

1. Download Expo Go from your app store
1. Clone this repo
1. Make sure that your phone and your machine are on the same local network, and that your machine has an open port 8081
1. `npm i`
1. `npm start`
1. You'll see a QR code in your terminal, scan it with Expo Go
1. You're good to go

Note: you can't really use the web version of this app because of CORS. So if you cannot use Expo Go, then you can build a development or production build of the app for your device/emulator.

# Building the app

First of all, this app is built with [devenv](https://devenv.sh/). This tool allows us to fix all of our dependencies (including system packages) and build our app in a reproducible fashion. It can be installed on Linux, MacOS or WSL2. The following instructions assume you have the command `devenv` available in your terminal.

NOTE: If you do not want to install `devenv`, I'm working on a Dockerfile and a .devcontainer spec that uses them under the hood.

First of all, enter the interactive shell which makes available all of our dependencies (Node, JDK, Android SDK, etc.)

```bash
devenv shell
```

Then you have options depending on the platform (currently only Android supported).

## Android

Build a debug version:
```bash
npm run build:android
```

Build a release version:
```bash
npm run build:android:release
```

Run a debug build on your device:
```bash
# make sure that you have a connected device or an emulator
adb devices
# now build and run your app
npm run android
```

# Tests

```bash
npm test
```

# GraphQL codegen

See [GENERATED.md](/src/graphql/GENERATED.md)

# File structure

All the source files live in the [src](src/) directory.

- [src/app](/src/app/) is all the routes and pages of the app
    - [src/app/_layout.tsx](/src/app/_layout.tsx) is the entry point
    - [src/app/sign-in.tsx](/src/app/sign-in.tsx) is the sign-in screen
    - [src/app/(app)/](/src/app/(app)/) is for routes requiring signing in
- Other dirs are pretty self-explanatory:
- [src/app/auth/](/src/app/auth/)
- [src/components/](/src/components/)
- [src/hooks/](/src/hooks/)
- [src/queries/](/src/queries/)
- [src/constants/](/src/constants/)
- [src/graphql](/src/graphql) see [GENERATED.md](/src/graphql/GENERATED.md)

Most interesting files in the project:

1. [useTreeStore.ts](/src/hooks/useTreeStore.ts) turns the tree structure from GraphQL into a flat list
1. [useFolderActions.ts](/src/hooks/useFolderActions.ts) wires GraphQL into treeStore and provides hooks for interactivity
1. [](/src/components/TreeView.tsx) displays tree as a FlatList using two previous files
1. [ApolloProviderWithSession.tsx](/src/components/ApolloProviderWithSession.tsx) combines auth from session with Apollo GraphQL
1. [ctx.tsx](/src/auth/ctx.tsx) manages authentication tokens and handles token refresh
1. [useStorageState.ts](/src/auth/useStorageState.ts) manages secure storage of auth tokens

# Other notes

Also feel free to check out [TODO.md](/TODO.md) to see how I kept track of the tasks ahead of me. And I do think that [ARCHITECTURE.md](/ARCHITECTURE.md) provides valuable context to understand why I did what I did.
