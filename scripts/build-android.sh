#!/usr/bin/env bash
set -euo pipefail

# --- Config -------------------------------------------------------------

DIST_DIR="dist"
ANDROID_DIR="android"

# --- Helpers ------------------------------------------------------------

log() { echo -e "\033[1;34m[build]\033[0m $*"; }
ok() { echo -e "\033[1;32m✅ $*\033[0m"; }
err() { echo -e "\033[1;31m❌ $*\033[0m"; }

# --- Argument parsing ---------------------------------------------------

BUILD_TYPE="${1:-debug}" # default to debug
case "$BUILD_TYPE" in
  debug|release) ;;
  *)
    err "Invalid build type: $BUILD_TYPE"
    echo "Usage: $0 [debug|release]"
    exit 1
    ;;
esac

# --- Prebuild step ------------------------------------------------------

mkdir -p "$DIST_DIR"

if [ ! -d "$ANDROID_DIR" ]; then
  log "Android directory not found — running expo prebuild..."
  npx expo prebuild --platform android
fi

cd "$ANDROID_DIR"

# --- Build --------------------------------------------------------------

log "Building $BUILD_TYPE APK..."
if [ "$BUILD_TYPE" = "debug" ]; then
  ./gradlew assembleDebug
  APK_PATH="app/build/outputs/apk/debug/app-debug.apk"
else
  ./gradlew assembleRelease
  # Either signed or unsigned, depending on Gradle config
  APK_PATH=$(find app/build/outputs/apk/release -name "app-release*.apk" | head -n1)
fi

# --- Copy output --------------------------------------------------------

if [ ! -f "$APK_PATH" ]; then
  err "Build failed: APK not found at $APK_PATH"
  exit 1
fi

cp "$APK_PATH" "../$DIST_DIR/"
cd ..

ok "APK built and copied to $DIST_DIR/$(basename "$APK_PATH")"
