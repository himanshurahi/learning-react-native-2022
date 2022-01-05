import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [Goal, setGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const inputHandler = (text) => {
    setGoal(text);
  };

  const addGoalHandler = () => {
    setCourseGoals([...courseGoals, Goal]);
    console.log(courseGoals);
    setGoal("");
  };

  return (
    <View style={styles.container}>
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
        <Button title="Add" onPress={addGoalHandler}></Button>
      </View>
      <ScrollView>
        {courseGoals.map((goal) => (
          <View style={styles.listItems} key={Math.random()}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  textInput: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    width: "80%",
  },
  listItems: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
