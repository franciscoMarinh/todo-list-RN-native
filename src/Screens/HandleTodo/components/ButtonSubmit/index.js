import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {View, StyleSheet, Text} from 'react-native';

const ButtonSubmit = ({onSubmit}) => {
  return (
    <View style={style.container}>
      <Icon.Button name="save" backgroundColor="#44bd32" onPress={onSubmit}>
        <Text style={{fontFamily: 'Arial', fontSize: 15}}>Salvar</Text>
      </Icon.Button>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default ButtonSubmit;
