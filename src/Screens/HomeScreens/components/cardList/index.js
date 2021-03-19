import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const CardList = ({item}) => {
  return (
    <View style={style.container}>
      <Text>{item.id} -</Text>
      <Text style={style.textTitle}>{item.title}</Text>
      <Icon name="edit-2" size={20}></Icon>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    minHeight: 40,
    maxHeight: 80,
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#dcdde1',
    backgroundColor: '#f5f6fa',
  },
  textTitle: {flex: 1, marginLeft: 7},
});

export default CardList;
