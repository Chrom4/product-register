import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { theme } from "../../theme";
import Icon from "../Icon";

const Button = (props) => {
  const { title, style, icon, onPress } = props;

  return (
    <TouchableOpacity activeOpacity={0.6} style={[styles.container, style]} onPress={onPress}>
      {title ? <Text>{title}</Text> : null}
      {icon ? (
        <Icon name={icon.name} size={icon.size} color={icon.color} />
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white.d3,
    textAlign: "center",
    textAlignVertical: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
});

export default Button;
