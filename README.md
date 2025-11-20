# React Native Splash Screen App

A React Native Android application demonstrating a custom splash screen implementation.

## 📚 Documentation

- **[Quick Start Guide](QUICKSTART.md)** - Get up and running in minutes
- **[Splash Screen Implementation Details](SPLASH_SCREEN_INFO.md)** - How the custom splash screen works
- **[Project Summary](PROJECT_SUMMARY.md)** - Complete project overview and features

## Features

- ✨ Custom splash screen with smooth transitions
- 📱 Android ready configuration
- 🎨 Beautiful Hello World UI
- 🚀 Built with Expo and TypeScript

## Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (v18 or later)
- **npm** or **yarn**
- **Android Studio** with Android SDK
- **Java Development Kit (JDK)** 17 or later

## Setup Instructions

### 1. Install Dependencies

```bash
cd SplashScreenApp
npm install
```

### 2. Set Up Android Environment

Make sure you have:
- Android Studio installed
- Android SDK (API level 33 or higher)
- Android Virtual Device (AVD) configured, or a physical Android device connected

### 3. Generate Native Android Project

```bash
npx expo prebuild --platform android
```

This command generates the native Android project files needed to run on Android.

## Running the Application

### Option 1: Using Expo Go (Quick Start)

1. Install Expo Go on your Android device from Google Play Store
2. Run the development server:
   ```bash
   npm start
   ```
3. Scan the QR code with Expo Go app

### Option 2: Running on Android Emulator/Device

1. Start your Android emulator or connect your Android device
2. Run the Android app:
   ```bash
   npm run android
   ```

The app will build and install on your device/emulator.

## Project Structure

```
SplashScreenApp/
├── App.tsx                 # Main app component with splash screen logic
├── app.json               # Expo configuration with splash screen settings
├── assets/                # App assets
│   ├── splash-icon.png    # Default splash screen image
│   ├── custom-splash.svg  # Custom SVG splash screen
│   └── icon.png          # App icon
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## How the Splash Screen Works

1. **Initial Display**: The native splash screen (configured in `app.json`) is displayed immediately when the app launches.

2. **Resource Loading**: The app loads resources while keeping the splash screen visible using `SplashScreen.preventAutoHideAsync()`.

3. **Smooth Transition**: After resources are loaded (simulated 2-second delay), the splash screen hides and the main content fades in with an animation.

4. **Configuration**: The splash screen appearance is customized in `app.json`:
   - Background color: `#4A90E2` (blue)
   - Image: `splash-icon.png`
   - Resize mode: `contain`

## Customizing the Splash Screen

### Change Background Color

Edit `app.json`:
```json
"splash": {
  "backgroundColor": "#YOUR_COLOR_HERE"
}
```

### Change Splash Image

1. Replace `assets/splash-icon.png` with your custom image
2. Update the path in `app.json` if needed

### Adjust Loading Time

In `App.tsx`, modify the timeout value:
```typescript
await new Promise(resolve => setTimeout(resolve, 2000)); // 2000ms = 2 seconds
```

## Building for Production

### Android APK/AAB

```bash
# Build APK
npx expo build:android -t apk

# Build AAB (for Google Play Store)
npx expo build:android -t app-bundle
```

Or use EAS Build (recommended):

```bash
npm install -g eas-cli
eas build --platform android
```

## Troubleshooting

### Metro bundler issues
```bash
npm start -- --reset-cache
```

### Android build errors
```bash
cd android
./gradlew clean
cd ..
npm run android
```

### Dependencies issues
```bash
rm -rf node_modules package-lock.json
npm install
```

## Technologies Used

- **React Native** - Cross-platform mobile framework
- **Expo** - Development platform and toolchain
- **TypeScript** - Type-safe JavaScript
- **expo-splash-screen** - Native splash screen control

## License

MIT

## Author

Created as a demonstration of React Native splash screen implementation.
