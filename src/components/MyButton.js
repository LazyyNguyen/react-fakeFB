import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
//init

const MyButton = ({onPress, model, children, item, ...props}) => {
  return (
    <TouchableOpacity
      {...props}
      onPress={onPress}
      style={[
        model == 'default' ? styles.primary : styles.ouline,
        styles.buttonLayout,
        model == 'warning' && styles.warning
      ]}>
      <Text
        style={[
          model == 'default' ? styles.primaryText : styles.oulineText,
          styles.buttonText,
        ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonLayout: {
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
  buttonText: {
    fontSize: 17,
    textAlign: 'center',
  },
  oulineText: {
    color: 'black',
  },
  primaryText: {
    color: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  button: {
    flexDirection: 'row',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  warning:{
    backgroundColor:'red'
  }
});
export default MyButton;
