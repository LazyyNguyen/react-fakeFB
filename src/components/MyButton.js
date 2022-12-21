import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
const MyButton = ({onPress, model, children, ...props}) => {
  return (
    <TouchableOpacity {...props} onPress={onPress}>
      <View
        style={[
          model == 'default' ? styles.primary : styles.ouline,
          styles.buttonLayout,
        ]}>
        <Text
          style={[
            model == 'default' ? styles.primaryText : styles.oulineText,
            styles.buttonText,
          ]}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonLayout:{
    width: 100,
    height: 37,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,

  },
  ouline: {

    backgroundColor: '#B0BBBF',
  },
  primary: {
    backgroundColor: 'blue',
  },
  buttonText:{
    fontSize: 17
  },
  oulineText:{
    color: 'black'
  },
  primaryText:{
    color: 'white'
  }
})
export default MyButton;
