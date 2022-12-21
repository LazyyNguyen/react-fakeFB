import React from 'react';
import {View, FlatList, StyleSheet, Text, Image} from 'react-native';

const TAG = [
  {
    id: 0,
    name: 'Suggestions',
  },
  {
    id: 1,
    name: 'Your Friends',
  },
  {
    id: 2,
    name: 'Your Friends',
  },
  {
    id: 3,
    name: 'Your Friends',
  },
  {
    id: 4,
    name: 'Your Friends',
  },
];

const renderItem = ({item, index}) => {
  return (
    <View key={index} style={styles.container}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </View>
  );
};


const ListTags = () => {
  return (
    <FlatList
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    scrollEnabled={true}
      data={TAG}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container:{
    padding:10,
    marginRight:10,
    borderRadius:30,

    backgroundColor:'#D7DCDE'
  }
});

export default ListTags;
