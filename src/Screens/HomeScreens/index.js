import React from 'react';
import {StyleSheet, Dimensions, FlatList} from 'react-native';
import CardItem from './components/Carditem';
const {width, height} = Dimensions.get('window');

let count = 1000;

const incrementCount = () => {
  count++;
  return count;
};

const HomeScreen = ({route, navigation}) => {
  const data = [
    {
      title: 'Tomar banho',
      id: 20,
      completed: true,
    },
    {
      title: 'Dormir',
      id: 30,
      completed: true,
    },
    {
      title: 'Tomar cafe',
      id: 40,
      completed: true,
    },
    {
      title: 'Tomar banho',
      id: 6520,
      completed: true,
    },
    {
      title: 'Dormir',
      id: 2563,
      completed: true,
    },
    {
      title: 'Tomar cafe',
      id: 88,
      completed: false,
    },
    {
      title: 'Tomar banho',
      id: 85,
      completed: true,
    },
    {
      title: 'Dormir',
      id: 237,
      completed: false,
    },
    {
      title: 'Tomar cafe',
      id: 22,
      completed: true,
    },
    {
      title: 'Tomar banho',
      id: 87,
      completed: false,
    },
    {
      title: 'Dormir',
      id: 77,
      completed: true,
    },
    {
      title: 'Tomar cafe',
      id: 56,
      completed: false,
    },
    {
      title: 'Tomar banho',
      id: 23,
      completed: true,
    },
    {
      title: 'Dormir',
      id: 448,
      completed: true,
    },
    {
      title: 'Tomar cafe',
      id: 12,
      completed: true,
    },
  ];

  const [state, setState] = React.useState(data);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const mergeState = (todo) => {
    const findIfExist = state.find((el) => el.id === todo.id);

    let payloadToUpdate;

    if (findIfExist) {
      payloadToUpdate = state.map((el) => {
        if (todo.id === el.id) {
          return todo;
        }
        return el;
      });
    } else {
      payloadToUpdate = [...state, {...todo, id: incrementCount()}];
    }

    setState(payloadToUpdate);
  };

  React.useEffect(() => {
    if (route?.params?.todo) {
      const {todo} = route?.params;
      mergeState(todo);
      navigation.setParams({todo: null});
    }
  }, [navigation, route.params, mergeState]);

  return (
    <FlatList
      style={style.container}
      data={state}
      renderItem={(props) => <CardItem {...props} />}
      keyExtractor={(item) => `${item.id}`}
    />
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: width * 0.07,
    paddingRight: width * 0.07,
    paddingTop: height * 0.02,
    paddingBottom: height * 0.15,
    backgroundColor: '#fffdfd',
  },
});

export default HomeScreen;
