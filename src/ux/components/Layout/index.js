import { View, Text, StyleSheet } from "react-native";
import { theme } from "../../theme";
import { dictionary as dict } from "../../../../assets/dictionary";
import NavBar from "../NavBar";

const Layout = (props) => {
  const { screenOptions, onScreenChange } = props;

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.text}>{dict.app.title}</Text>
      </View>
      <NavBar options={screenOptions} onScreenChange={onScreenChange}/>
      <View style={styles.content}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: theme.colors.white.base,
    fontSize: 20,
    fontWeight: "800",
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  menu: {},
  content: {
    flex: 1,
    backgroundColor: theme.colors.white.base,
  },
});

export default Layout;
