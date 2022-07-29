import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity } from 'react-native';
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useState } from "react";
export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 5000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  
  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.top}>
        <Image source={require("./assets/logoP.png")} style={styles.Image} />
        <Text style={{ fontSize: 33, fontWeight: "bold", color: "white" }}>
          Millions of songs.
        </Text>
        <Text style={{ fontSize: 33, fontWeight: "bold", color: "white" }}>
          Free on Spotify
        </Text>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={{
            width: "80%",
            backgroundColor: "#1ED760",
            padding: 20,
            alignItems: "center",
            borderRadius: 30,
          }}
        >
          <Text
            style={{
              color: "white",
              textTransform: "uppercase",
              fontWeight: "600",
              fontSize: 18,
            }}
          >
            Sing Up Free
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "80%",
            backgroundColor: "#191414",
            padding: 20,
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: 30,
            borderColor: "#454542",
            borderWidth: 2,
            borderStyle: "solid",
            flexDirection: "row",
          }}
        >
          <Image
            source={require("./assets/iconPho.png")}
            style={{ width: 30, height: 30 }}
          />
          <Text
            style={{
              color: "white",
              textTransform: "uppercase",
              fontWeight: "600",
              fontSize: 15,
              width: 300,
              textAlign: "center",
            }}
          >
            Continue With Phone Number
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "80%",
            backgroundColor: "#191414",
            padding: 20,
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: 30,
            borderColor: "#454542",
            borderWidth: 2,
            borderStyle: "solid",
            flexDirection: "row",
          }}
        >
          <Image
            source={require("./assets/iconFac.png")}
            style={{ width: 30, height: 30 }}
          />
          <Text
            style={{
              color: "white",
              textTransform: "uppercase",
              fontWeight: "600",
              fontSize: 15,
              width: 300,
              textAlign: "center",
            }}
          >
            Continue with Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "80%",
            backgroundColor: "#191414",
            padding: 20,
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: 30,
            borderColor: "#454542",
            borderWidth: 2,
            borderStyle: "solid",
            flexDirection: "row",
          }}
        >
          <Image
            source={require("./assets/iconApp.png")}
            style={{ width: 30, height: 30 }}
          />
          <Text
            style={{
              color: "white",
              textTransform: "uppercase",
              fontWeight: "600",
              fontSize: 15,
              width: 300,
              textAlign: "center",
            }}
          >
            Continue with Apple
          </Text>
        </TouchableOpacity>
        <View>
          <Text
            style={{
              color: "white",
              textTransform: "uppercase",
              fontWeight: "600",
              fontSize: 17,
            }}
          >
            Login
          </Text>
        </View>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191414",
    justifyContent: "center",
  },
  top: {
    flex: 2,
    backgroundColor: "#191414",
    justifyContent: "center",
    alignItems: "center",
  },
  Image: {
    resizeMode: "contain",
    width: 100,
    height: 100,
  },
  bottom: {
    flex: 2,
    backgroundColor: "#191414",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
