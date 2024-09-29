import { StatusBar } from "expo-status-bar";
import { View, NativeModules, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

import Layout from "./src/ux/components/Layout";
import ContentRender from "./src/ux/components/ContentRender";
import { theme } from "./src/ux/theme";
import screens from "./src/screens";

export default function App() {
  const [screen, setScreen] = useState("");

  useEffect(() => {
    if (!screen) {
      setScreen("Home");
    }
  }, []);

  const handleScreenChange = (screen) => {
    setScreen(screen);
  };

  const statusBarHeight = NativeModules.StatusBarManager.HEIGHT;
  return (
    <View style={[styles.container, { paddingTop: statusBarHeight }]}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        style="light"
      />
      <Layout screenOptions={screens} onScreenChange={handleScreenChange}>
        <ContentRender onScreenChange={handleScreenChange} screen={screen} />
      </Layout>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary.base,
    flex: 1,
  },
});
