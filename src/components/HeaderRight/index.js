import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {View, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const HeaderRight = () => {
  return (
    <View style={style.container}>
      <Icon name="plus" size={35} color="#487eb0"></Icon>
    </View>
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
