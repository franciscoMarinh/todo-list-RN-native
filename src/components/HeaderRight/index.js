import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const HeaderRight = () => {
  const navigation = useNavigation();

  const onClick = () => {
    navigation.navigate('HandleTodo');
  };

  return (
    <TouchableOpacity style={style.container} onPress={onClick}>
      <Icon name="plus" size={35} color="#487eb0" />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignContent: 'center',
    marginRight: width * 0.04,
  },
});

export default HeaderRight;
