import { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import { Button, View } from "react-native";
import Todos from "./Todos";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <View>
      <Todos todos={todos} addTodo={addTodo} />
      <View>
        <Text>Count: {count}</Text>
        <Button onPress={increment} title='+'/>
      </View>
    </View>
  );
};
export default UseCallback 

