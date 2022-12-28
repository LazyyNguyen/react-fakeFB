import {useRef, useState} from 'react';
import { Button, Text, View } from 'react-native';

export default function UseRef(){
    const [count, setCount] = useState(60)
    
    const Timid = useRef()
    const handleStart = () => {
        Timid.current = setInterval(()=>{
            setCount(pre => pre -1)
        },1000)

    }
    const handleStop = () => {
        clearInterval(Timid.current)
    }
    return(
        <View>
            <Text>{count}</Text>
            <Button onPress={handleStart} title='Start'/>
            <Button onPress={handleStop} title='Stop'/>
        </View>
    )
}