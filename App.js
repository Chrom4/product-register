import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import Constants from "expo-constants";
import Layout from "./src/view/components/Layout";
import ContentRender from "./src/view/components/ContentRender";
import { theme } from "./src/view/theme";
import screens from "./src/screens";

import { action } from "./src/model/action";
import i18n from "./assets/dictionary";

export default function App() {
  const [screen, setScreen] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [context, setContext] = useState({
    data: null,
    i18n: i18n,
  });

  const statusBarHeight = Constants.statusBarHeight;
  let content = [];

  useEffect(() => {
    if (!screen) {
      setScreen("Home");
    }

    const fetchData = async () => {
      const fetchedData = await action("fetch", {
        collection: "products",
      });
      setContext((prevState) => ({ ...prevState, data: fetchedData.data }));
    };

    fetchData();
    if (refreshing) setRefreshing(false);
  }, [screen, refreshing]);

  const handleRefresh = () => {
    setRefreshing(true);
  };

  const handleScreenChange = (screen) => {
    setScreen(screen);
  };

  content.push(
    <View
      key={"layout"}
      style={[styles.container, { paddingTop: statusBarHeight }]}
    >
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        style="light"
      />
      <Layout screenOptions={screens} selected={screen} onScreenChange={handleScreenChange}>
        <ContentRender
          onScreenChange={handleScreenChange}
          screen={screen}
          context={context}
          refresh={{
            onRefresh: handleRefresh,
            refreshing: refreshing,
          }}
        />
      </Layout>
    </View>
  );

  return content;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary.base,
    flex: 1,
  },
});
