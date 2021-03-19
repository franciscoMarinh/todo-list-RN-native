import React from 'react';
import {View, StyleSheet} from 'react-native';

import ButtonSubmit from './components/ButtonSubmit';
import InputTitle from './components/InputTitle';
import CheckBoxItem from './components/CheckboxItem';

const HandleTodo = () => {
  const [state, setState] = React.useState({});

  const inputFieldHandle = (text) => {
    setState({...state, title: text});
  };

  React.useEffect(() => {
    console.log(state);
  });

  const checkBoxHandle = () => {
    setState({...state, completed: !state.completed});
  };

  const onSubmit = () => {
    console.log('Foi clickado');
  };

  return (
    <View style={style.container}>
      <View style={style.cardContainer}>
        <InputTitle onChangeText={inputFieldHandle} />
        <CheckBoxItem completed={state.completed} onChange={checkBoxHandle} />
        <ButtonSubmit onSubmit={onSubmit} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: '10%',
    justifyContent: 'center',
  },
  cardContainer: {
    backgroundColor: '#dcdde1',
    borderRadius: 15,
    padding: 20,
    height: '50%',
  },
});

export default HandleTodo;
