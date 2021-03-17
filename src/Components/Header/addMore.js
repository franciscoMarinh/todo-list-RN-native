import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const AddMore = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('HandleTodo');
  };
  return (
    <TouchableOpacity style={{margin: 7}} onPress={onPress}>
      <Icon name="plus" size={30} />
    </TouchableOpacity>
  );
};

export default AddMore;
