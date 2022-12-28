import { useState, useMemo } from "react";
import { Button, Text, View } from "react-native";
// Usage
export default function UseMemo() {
  // State for our counter
  const [count, setCount] = useState(0);
  // State to keep track of current word in array we want to show
  const [wordIndex, setWordIndex] = useState(0);
  // Words we can flip through and view letter count
  const words = ["hey", "this", "is", "cool"];
  const word = words[wordIndex];
  // Returns number of letters in a word
  // We make it slow by including a large and completely unnecessary loop
  const computeLetterCount = (word) => {
    let i = 0;
    while (i < 1000000000) i++;
    return word.length;
  };
  // Memoize computeLetterCount so it uses cached return value if input array ...
  // ... values are the same as last time the function was run.
  const letterCount = useMemo(() => computeLetterCount(word), [word]);
  // This would result in lag when incrementing the counter because ...
  // ... we'd have to wait for expensive function when re-rendering.
  //const letterCount = computeLetterCount(word);
  return (
    <View style={{ padding: 15 }}>
      <Text>Compute number of letters (slow 🐌)</Text>
      <Text>
        "{word}" has {letterCount} letters
      </Text>
      <Button
        onPress={() => {
          const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
          setWordIndex(next);
        }}
        title='Next word'
      />
        
      <Text>Increment a counter (fast ⚡️)</Text>
      <Text>Counter: {count}</Text>
      <Button onPress={() => setCount(count + 1)} title='Increment'/>
    </View>
  );
}