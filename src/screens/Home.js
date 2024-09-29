import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import { theme } from "../ux/theme";
import Button from "../ux/components/Button";
import Modal from "../ux/components/Modal";

const Home = (props) => {
  const [modal, setModal] = useState();

  const handleRegisterForm = () => {
    return setModal(<Modal buttons={["cancel", "save"]} setModal={setModal} type={"register"}/>);
  };

  return (
    <View style={styles.container}>
      
      {!modal ? (
        <View style={styles.footer}>
          <Button
            style={styles.addButton}
            icon={{ name: "plus", size: 30, color: theme.colors.white.base }}
            onPress={handleRegisterForm}
          />
        </View>
      ) : null}
      {modal}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: "500",
  },
  text: {
    fontWeight: "300",
  },
  selectionMenu: {
    margin: 16,
    backgroundColor: theme.colors.white.d1,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  buttonList: {
    paddingVertical: 12,
    gap: 8,
  },
  footer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 16,
  },
  addButton: {
    backgroundColor: theme.colors.primary.base,
    borderRadius: 50,
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
