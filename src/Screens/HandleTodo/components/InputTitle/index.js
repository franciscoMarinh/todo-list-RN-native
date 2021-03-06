import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {View, StyleSheet, TextInput} from 'react-native';

const InputTitle = ({onChangeText, value}) => {
  return (
    <View style={style.cardItem}>
      <Icon name="edit" size={20} style={{marginRight: 7}} />
      <TextInput
        autoFocus
        multiline
        value={value}
        onChangeText={onChangeText}
        style={style.textInput}
        placeholder="Title"
        keyboardType="default"
      />
    </View>
  );
};

const style = StyleSheet.create({
  textInput: {
    flex: 1,
  },
  cardItem: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0.9,
    borderRadius: 7,
    padding: 10,
  },
});

export default InputTitle;
