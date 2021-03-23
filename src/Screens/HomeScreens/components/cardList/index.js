import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const CardList = ({item, removeTodo}) => {
  const navigation = useNavigation();

  const onpress = () => {
    navigation.navigate('HandleTodo', {todo: item});
  };

  const handleRemove = () => {
    removeTodo(item.id);
  };

  return (
    <View style={style.container}>
      <Text>{item.id} -</Text>
      <Text style={style.textTitle}>{item.title}</Text>
      {item.completed && <Icon name="check" size={20} color="green" />}
      <TouchableOpacity onPress={onpress}>
        <Icon name="edit-2" size={20} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRemove}>
        <Icon name="trash" size={20} />
      </TouchableOpacity>
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
