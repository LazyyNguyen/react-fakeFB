import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';

import MyButton from './MyButton';
import DATA from './DATA';

const MyModal = ({isVisible, onClose, onSubmit, item}) => {
  const pressDone = () => {
    const data = DATA;
    data.splice(
      data.findIndex(a => a.id === item.id),
      1,
    );
    onClose();
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are you sure want to delete {item.name}
            </Text>
            <View style={styles.button}>
              <MyButton onPress={onClose}>
                <Text style={styles.textStyle}>Cancel</Text>
              </MyButton>
              <MyButton onPress={pressDone} model="warning">
                <Text style={styles.textStyle}>Delete</Text>
              </MyButton>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
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
    alignItems: 'center',
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
    justifyContent: 'space-between',
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
    fontWeight: 'bold',
  },
  warning: {
    backgroundColor: 'red',
  },
});

export default MyModal;
