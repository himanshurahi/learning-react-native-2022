import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [Goal, setGoal] = useState("");

  const inputHandler = (text) => {
    setGoal(text);
  };

  return (
    <Modal visible = {props.visible} animationType="slide">
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={inputHandler}
          value={Goal}
        />
        <Button title="Add" onPress={() => props.onAddGoal(Goal)}></Button>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    width: "80%",
  },
});

export default GoalInput;
