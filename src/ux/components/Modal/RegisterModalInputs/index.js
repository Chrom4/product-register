import { View, Text, StyleSheet, TextInput } from "react-native";
import { useState, useEffect } from "react";

import { theme } from "../../../theme";

const RegisterModalInputs = (props) => {
  const { onDataChange } = props;

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Text style={styles.title}>Nome:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(value) => onDataChange("name", value)}
        />
      </View>

      <View style={styles.input}>
        <Text style={styles.title}>Código:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(value) => onDataChange("code", value)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 4,
  },
  textInput: {
    width: "100%",
    borderRadius: 4,
    backgroundColor: theme.colors.white.base,
    borderWidth: 1,
    borderColor: theme.colors.white.d2,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 12,
    fontWeight: "600",
  },
});

export default RegisterModalInputs;
