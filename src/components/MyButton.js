import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
//init
import DATA from './DATA';

const MyButton = ({onPress, model, children, item, ...props}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const removeFriend = item => {
    DATA.splice(
      DATA.findIndex(a => a.id === item.id),
      1,
    );
    setModalVisible(!modalVisible);
  };
  return (
    <TouchableOpacity {...props} onPress={onPress}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Do you sure want to remove {item?.name}
            </Text>
            <Pressable 
            style={styles.button}>
              <Text style={styles.buttonLayout} onPress={() => setModalVisible(!modalVisible)}>Cancel</Text>
              <Text style={styles.buttonLayout} onPress={() => removeFriend(item)}>Confirm</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View
        style={[
          model == 'default' ? styles.primary : styles.ouline,
          styles.buttonLayout,
        ]}>
        <Text
          onPress={() => setModalVisible(true)}
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
});
export default MyButton;
