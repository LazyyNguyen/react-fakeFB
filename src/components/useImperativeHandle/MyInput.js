import { forwardRef, useRef, useImperativeHandle } from 'react';
import { TextInput } from 'react-native';

const MyInput = forwardRef(function MyInput(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus();
      },
      scrollIntoView() {
        inputRef.current.scrollIntoView();
      },
    };
  }, []);

  return <TextInput {...props} ref={inputRef} />;
});

export default MyInput;
