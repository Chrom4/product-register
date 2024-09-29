import { View, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const IconComponent = (props) => {
  const { name, size, color } = props;
  let icon;

  switch (name) {
    case "plus":
      icon = faPlus;
      break;
    case "times":
      icon = faTimes;
      break;
    case "check":
      icon = faCheck;
      break;
    default:
      break;
  }

  if (!icon) return <Text>Unknown icon</Text>;
  return <FontAwesomeIcon size={size} icon={icon} color={color} />;
};

const styles = StyleSheet.create({
  container: {},
});

export default IconComponent;
