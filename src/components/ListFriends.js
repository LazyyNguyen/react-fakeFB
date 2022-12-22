import React from 'react';
import {View, FlatList, StyleSheet, Text, Image} from 'react-native';

import MyButton from './MyButton';
import ListTags from './ListTags';
import DATA from './DATA'


const ListHeaderComponent = () => {
  return (
    <View style={{}}>
      <Text style={styles.title}>Friends</Text>
      <ListTags />
    </View>
  );
};
const renderItem = ({item, index}) => {
  return (
    <View key={index} style={styles.container}>
      <Image
        style={{
          borderRadius: 100,
          height: 90,
          width: 90,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        source={item.avatar}
      />
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.button}>
          <MyButton model="default">Confirm</MyButton>
          <MyButton item={item}>Delete</MyButton>
        </View>
      </View>
    </View>
  );
};

const ListFriends = () => {
  
  return (
    <FlatList
      ListHeaderComponent={ListHeaderComponent}
      data={DATA}
      contentContainerStyle={DATA.length ? styles.wrapper : styles.centerEmptySet}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      ListEmptyComponent={() =>
        DATA.length ? (
          <View style={styles.centerEmptySet}>
            <Text style={styles.emptyMessageStyle}>The list is empty</Text>
          </View>
        ) : null
      }
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {marginVertical: 8, marginHorizontal: 16},
  centerEmptySet: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  emptyMessageStyle: {
    textAlign: 'center',
  },
  container: {
    marginBottom:10,
    marginTop:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },

  title: {
    margin: 5,
    color: 'black',
    fontSize: 25,
    fontWeight: '500',
  },
  button: {
    flexDirection: 'row',
  },
  name: {
    margin: 5,
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
});

export default ListFriends;
