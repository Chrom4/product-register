import { View, Modal as RM, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { theme } from "../../theme";
import Button from "../Button";
import RegisterModalInputs from "./registerModalInputs";
import { mutation } from "../../../mutations";

const Modal = (props) => {
  const [visible, setVisible] = useState(!!props);
  const [statusMessage, setStatusMessage] = useState();
  const [data, setData] = useState({});

  const { buttons, setModal, type } = props;

  let inputs = [];
  
  const handleModalSave = () => {
    let status;
    console.log(" > ", data, type);
    status = mutation(type, data);
    if (status.key) setStatusMessage(status.value);
  };

  const handleModalCancel = () => {
    setModal(false);
    setVisible(false);
  };

  const handleDataChange = (key, value) => {
    let clone = JSON.parse(JSON.stringify(data));
    clone[key] = value;
    setData(clone);
  };

  switch (type) {
    case "register":
      inputs = <RegisterModalInputs onDataChange={handleDataChange} />;
  }

  if (buttons && buttons.length) {
    buttons.forEach((b, index) => {
      let icon, onPress, style;
      switch (b) {
        case "save":
          icon = { name: "check", color: theme.colors.white.base, size: 30 };
          style = { backgroundColor: theme.colors.green.base };
          onPress = handleModalSave;
          break;
        case "cancel":
          icon = { name: "times", color: theme.colors.white.base, size: 30 };
          style = { backgroundColor: theme.colors.red.base };
          onPress = handleModalCancel;
          break;
        default:
          return;
      }
      buttons[index] = (
        <Button key={index} icon={icon} style={style} onPress={onPress} />
      );
    });
  }

  return (
    <RM
      visible={visible}
      animationType="slide"
      transparent={true}
      onBackdropPress={handleModalCancel}
    >
      <View style={styles.container}>
        <View style={styles.modal}>
          {inputs}
          {statusMessage ? (
            <View style={styles.statusMessage}>{statusMessage}</View>
          ) : null}
        </View>
        <View style={styles.buttonGroup}>{buttons}</View>
      </View>
    </RM>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.6)",
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    gap: 30,
  },
  buttonGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  modal: {
    flex: 1,
    backgroundColor: theme.colors.white.d1,
    padding: 10,
    borderRadius: 20,
  },
});

export default Modal;
