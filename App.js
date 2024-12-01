import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    async function hideSplashScreen() {
      try {
        await SplashScreen.preventAutoHideAsync(); 
        await SplashScreen.hideAsync(); 
      } catch (e) {
        console.error(e);
      }
    }
    hideSplashScreen();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Welcome to the App!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
