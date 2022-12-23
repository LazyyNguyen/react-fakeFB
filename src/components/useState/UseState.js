import {useState} from 'react';
import {Button, Text, View} from 'react-native';
export default function UseState() {
  const [counter, setCounter] = useState(1);
  const handleIncrease = () => {
    setCounter(counter + 1);
  };
  return (
    <View>
      <Text>{counter}</Text>
      <Button title="Increase" onPress={handleIncrease}></Button>
    </View>
  );
}
