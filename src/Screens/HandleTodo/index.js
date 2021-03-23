import React from 'react';
import {View, StyleSheet} from 'react-native';

import ButtonSubmit from './components/ButtonSubmit';
import InputTitle from './components/InputTitle';
import CheckBoxItem from './components/CheckboxItem';

const HandleTodo = ({navigation, route}) => {
  const [state, setState] = React.useState({});

  const inputFieldHandle = (text) => {
    setState({...state, title: text});
  };

  React.useEffect(() => {
    if (route?.params?.todo) {
      setState({...route.params.todo});
    }
  }, [route]);

  const checkBoxHandle = () => {
    setState({...state, completed: !state.completed});
  };

  const onSubmit = () => {
    navigation.navigate('Home', {todo: state});
  };

  return (
    <View style={style.container}>
      <View style={style.cardContainer}>
        <InputTitle value={state.title} onChangeText={inputFieldHandle} />
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
    justifyContent: 'center',
    borderRadius: 15,
    padding: 20,
    height: '50%',
  },
});

export default HandleTodo;
