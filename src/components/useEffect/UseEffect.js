import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Text } from "react-native";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <Text>I've rendered {count} times!</Text>;
}

export default Timer;