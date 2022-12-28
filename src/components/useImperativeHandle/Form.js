import { useRef } from 'react';
import { Button, View } from 'react-native';
import MyInput from './MyInput.js';

export default function Form() {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
  }

  return (
    <View>
      <MyInput label="Enter your name:" ref={ref} />
      <Button type="button" onPress={handleClick} title='Edit'/>
    </View>
  );
}
