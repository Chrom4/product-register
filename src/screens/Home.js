import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { theme } from "../ux/theme";
import Button from "../ux/components/Button";
import Modal from "../ux/components/Modal";
import products from "../registers/products/products.json";

const Card = ({ name, code }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        Nome: <Text style={styles.text}>{name}</Text>
      </Text>
      <Text style={styles.title}>
        Código: <Text style={styles.text}>{code}</Text>
      </Text>
    </View>
  );
};

const Home = (props) => {
  const [modal, setModal] = useState();

  const handleRegisterForm = () => {
    return setModal(
      <Modal
        buttons={["cancel", "save"]}
        setModal={setModal}
        type={"register"}
      />
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ rowGap: 20 }} style={styles.list}>
        {products.map((p, index) => {
          return <Card key={"card" + index} name={p.name} code={p.code} />;
        })}
      </ScrollView>
      <View style={styles.footer}>
        <Button
          style={styles.addButton}
          icon={{ name: "plus", size: 30, color: theme.colors.white.base }}
          onPress={handleRegisterForm}
        />
      </View>
      {modal}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    gap: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    flex: 1,
  },
  title: {
    color: theme.colors.white.base,
    fontWeight: "900",
    fontSize: 30,
  },
  text: {
    color: theme.colors.white.base,
    fontWeight: "500",
    fontSize: 25,
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
  card: {
    borderRadius: 8,
    padding: 10,
    backgroundColor: theme.colors.primary.l5,
  },
});

export default Home;
