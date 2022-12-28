import { memo } from "react";
import { Button, Text, View } from "react-native";

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <View>
      <Text>My Todos</Text>
      {todos.map((todo, index) => {
        return <Text key={index}>{todo}</Text>;
      })}
      <Button onPress={addTodo} title="Add Todo"/>
    </View>
  );
};

export default memo(Todos);