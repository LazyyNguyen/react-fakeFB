import {useState, useLayoutEffect} from 'react';
import {Button, Text, View} from 'react-native';

export default function UseLayoutEffect() {
  const [count, setCount] = useState(1);
  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);
  const handleRun = () => {
    setCount(count + 1);
  };
  return (
    <View>
      <Text>{count}</Text>
      <Button onPress={handleRun} title='Run'/>
    </View>
  );
}
