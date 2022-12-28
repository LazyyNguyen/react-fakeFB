import React from 'react';
import {View} from 'react-native';
import UseImperativeHandle from './src/components/useImperativeHandle/MyInput';
import UseLayoutEffect from './src/components/useLayoutEffect/UseLayoutEffect';
import UseMemo from './src/components/useMemo/UseMemo';
import UseRef from './src/components/useRef/UseRef';
import UseEffect from './src/components/useEffect/UseEffect';
import UseCallback from './src/components/useCallback/UseCallback';
import Form from './src/components/useImperativeHandle/Form';

export default function App() {
  return (
    <View>
      <UseMemo/>
    </View>
  );
}
