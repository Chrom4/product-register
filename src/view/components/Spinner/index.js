import { height, width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import { theme } from "../../theme";

const styles = StyleSheet.create({
  container: {
    position:"absolute",
    zIndex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  spinner: {
    width: 100,
    height: 100
  },
});
const Spinner = () => {
  return (
    <View style={styles.container}>
      <Text style={{}}>
        <ActivityIndicator color={theme.colors.primary.base} size={50}/>
      </Text>
    </View>
  );
};

export default Spinner;
