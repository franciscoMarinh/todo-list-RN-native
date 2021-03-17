import React from 'react';
import {View, Text, Dimensions, StyleSheet, TextInput} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Feather';
const {width} = Dimensions.get('screen');

const CardInput = ({value, onChangeText}) => {
  return (
    <View style={style.cardItem}>
      <Icon name="edit" size={20} style={{marginRight: 10}} />
      <TextInput
        value={value}
        style={{flex: 1}}
        placeholder="Titulo"
        onChangeText={onChangeText}
      />
    </View>
  );
};

const CardButton = (props) => {
  return (
    <View style={style.itemContainer}>
      <Icon.Button
        name="save"
        backgroundColor="#44bd32"
        onPress={props.onPress}>
        <Text style={{fontFamily: 'Arial', fontSize: 15}}>Salvar</Text>
      </Icon.Button>
    </View>
  );
};

const CardCheckBox = ({onValueChange}) => {
  return (
    <View style={[style.itemContainer, style.radioButtonContainer]}>
      <CheckBox onValueChange={onValueChange} />
    </View>
  );
};

const HandleTodo = ({navigation, route}) => {
  const todo = route?.params?.todo ?? {};

  const [state, setState] = React.useState(todo);

  React.useEffect(() => {
    const title = todo?.title ?? 'Adicionar todo';
    navigation.setOptions({title});
  }, [navigation, todo.title]);

  const changeTitle = (text) => {
    setState({...state, title: text});
  };

  const submitTodo = () => {
    navigation.navigate('Home', {todo: state});
  };

  const changeCheckBox = (value) => {
    setState({...state, completed: value});
  };

  return (
    <View style={style.container}>
      <View style={style.card}>
        <CardInput onChangeText={changeTitle} value={state.title} />
        <CardCheckBox onValueChange={changeCheckBox} />
        <CardButton onPress={submitTodo} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdfd',
    alignContent: 'center',
    justifyContent: 'center',
    paddingLeft: width * 0.07,
    paddingRight: width * 0.07,
  },
  card: {
    height: '40%',
    borderRadius: 15,
    padding: 15,
    justifyContent: 'flex-start',
  },
  cardItem: {
    flexDirection: 'row',
    borderRadius: 15,
    borderWidth: 2,
    padding: 15,
    borderColor: '#dcdde1',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
});

export default HandleTodo;
