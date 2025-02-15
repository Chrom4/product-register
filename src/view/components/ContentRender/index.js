import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import Home from "../../../screens/Home";
import Registers from "../../../screens/Registers";

const ContentRender = (props) => {
  const { onScreenChange, screen, context, refresh } = props;

  let currentScreen;
  switch (screen) {
    case "Home":
      currentScreen = <Home context={context} refresh={refresh} />;
      break;
    case "Registers":
      currentScreen = <Registers />;
      break;
    default:
      currentScreen = (
        <View style={styles.message}>
          <Text>{"Tela não encontrada."}</Text>
        </View>
      );
      break;
  }

  return <View style={styles.container}>{currentScreen}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  message: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ContentRender;
