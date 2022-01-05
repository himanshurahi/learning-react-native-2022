import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [Goal, setGoal] = useState("");

  const inputHandler = (text) => {
    setGoal(text);
  };

  const addGoalHandler = () => {
    props.onAddGoal(Goal);
    setGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={inputHandler}
          value={Goal}
        />
        <View style = {{flexDirection : 'row', justifyContent : 'space-between', width : '40%'}}>
          <Button title="Add" onPress={addGoalHandler}></Button>
          <Button
            title="Cancel"
            onPress={props.onCancel}
            color={"red"}></Button>
        </View>
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
    marginBottom: 10,
  },
});

export default GoalInput;
