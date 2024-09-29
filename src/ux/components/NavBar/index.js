import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { theme } from "../../theme";

const NavBar = (props) => {
  const { options, onScreenChange } = props;

  const handleOptionPress = (option) => {
    onScreenChange(option)
  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={{
          alignItems: "center",
          rowGap: 16,
        }}
      >
        {options
          ? options.map((o, index) => (
              <>
                <TouchableOpacity key={index} style={styles.option} onPress={() => handleOptionPress(o.key)}>
                  <Text style={styles.optionText}>{o.value}</Text>
                </TouchableOpacity>
                {(index !== options.length - 1) ?
                <View style={styles.separatorLine} /> : null}
              </>
            ))
          : null}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: theme.colors.secondary.base,
  },
  optionText: {
    color: theme.colors.white.base,
    fontSize: 12,
    fontWeight: "600",
  },
  option: {
    padding: 10,
    flexDirection: "row",
  },
  separatorLine: {
    height: "80%",
    width: 1,
    backgroundColor: theme.colors.white.base,
    opacity: 0.2,
  },
});

export default NavBar;
