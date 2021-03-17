import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const CardList = ({item}) => {
  const navigation = useNavigation();

  const onPress = () => {
    return navigation.navigate('HandleTodo', {
      todo: item,
    });
  };

  return (
    <View style={style.container}>
      <Text>{item.id} -</Text>
      <Text style={style.cardTitle}>{item.title}</Text>
      <TouchableOpacity onPress={onPress} disabled={item.completed}>
        {item.completed ? (
          <Icon name="check" size={20} color="green" />
        ) : (
          <Icon name="edit-2" size={20} color="#e1b12c" />
        )}
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  cardTitle: {
    flex: 1,
    marginLeft: 7,
  },
  container: {
    minHeight: 30,
    maxHeight: 60,
    margin: 7,
    borderRadius: 15,
    padding: 15,
    borderColor: '#dcdde1',
    borderWidth: 2,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    backgroundColor: '#f5f6fa',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default CardList;
