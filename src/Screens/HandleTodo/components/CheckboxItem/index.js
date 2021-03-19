import React from 'react';
import {View, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const CheckBoxItem = ({onChange, completed}) => {
  return (
    <View style={style.checkBoxItem}>
      <CheckBox value={completed} onChange={onChange} />
    </View>
  );
};

const style = StyleSheet.create({
  checkBoxItem: {
    margin: 20,
    alignItems: 'center',
  },
});

export default CheckBoxItem;
