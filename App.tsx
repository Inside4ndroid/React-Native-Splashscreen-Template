import { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [showCustomSplash, setShowCustomSplash] = useState(true);
  const fadeAnim = new Animated.Value(1);

  useEffect(() => {
    async function prepare() {
      try {
        // Hide the native splash screen immediately
        await SplashScreen.hideAsync();
        
        // Show custom splash screen for 2 seconds
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Fade out custom splash
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          setShowCustomSplash(false);
          setAppIsReady(true);
        });
      } catch (e) {
        console.warn(e);
        setShowCustomSplash(false);
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  // Show custom splash screen
  if (showCustomSplash) {
    return (
      <Animated.View style={[styles.splashContainer, { opacity: fadeAnim }]}>
        <View style={styles.splashLogo}>
          <Text style={styles.splashLogoText}>RN</Text>
        </View>
        <Text style={styles.splashTitle}>Hello World</Text>
        <Text style={styles.splashSubtitle}>React Native App</Text>
      </Animated.View>
    );
  }

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>RN</Text>
          </View>
        </View>
        <Text style={styles.title}>Hello World!</Text>
        <Text style={styles.subtitle}>Welcome to React Native</Text>
        <Text style={styles.description}>
          This app showcases a custom splash screen
        </Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            ✨ Custom splash screen implemented
          </Text>
          <Text style={styles.infoText}>
            📱 Android ready
          </Text>
          <Text style={styles.infoText}>
            🚀 Built with Expo
          </Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#4A90E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashLogo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  splashLogoText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  splashTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  splashSubtitle: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    marginBottom: 30,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#4A90E2',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  logoText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    color: '#666',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginBottom: 30,
  },
  infoBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoText: {
    fontSize: 16,
    color: '#4A90E2',
    marginVertical: 5,
    fontWeight: '500',
  },
});
