import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    StyleSheet,
    Pressable,
  } from 'react-native';
  import DATA from './DATA';
const MyModal = ({item}) =>{
    const [modalVisible, setModalVisible] = useState(false);

return(
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
)
}
export default MyModal;
