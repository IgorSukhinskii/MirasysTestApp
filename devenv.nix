{ pkgs, lib, config, inputs, ... }:

{
  # Android development environment
  android = {
    enable = true;
    reactNative.enable = true;
    # android-studio.enable = true;
  };

  cachix.enable = false;

  # https://devenv.sh/processes/
  processes.emulator.exec = "emulator -avd phone -skin 720x1280";
  processes.expo-go.exec = "npx expo start";

  # https://devenv.sh/scripts/
  scripts.create-avd.exec = ''
    avdmanager create avd --force --name phone --package 'system-images;android-34;google_apis_playstore;x86_64';
  '';
}