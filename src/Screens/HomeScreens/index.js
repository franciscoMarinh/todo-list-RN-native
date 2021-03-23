import React, {useState, useEffect} from 'react';
import {StyleSheet, Dimensions, FlatList} from 'react-native';
import CardList from './components/cardList';

const {width, height} = Dimensions.get('window');
import {getTodos} from '../../service/jsonPlacehold.service';

const getMaxId = (state) => {
  if (state.length === 0) {
    return 0;
  }
  const arrayOfIds = state.map((el) => el.id);
  const maxValue = Math.max(...arrayOfIds);
  return maxValue + 1;
};

const HomeScreen = ({navigation, route}) => {
  const [state, setState] = useState([]);

  const getTodosOnJsonPlaceHold = React.useCallback(async () => {
    try {
      const {data} = await getTodos();
      setState(data.slice(0, 20));
    } catch (error) {
      console.log(error, 'error');
    }
  }, []);

  React.useEffect(() => {
    getTodosOnJsonPlaceHold();
  }, [getTodosOnJsonPlaceHold]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stateMerge = (todo) => {
    return state.map((stateTodo) => {
      if (stateTodo.id === todo.id) {
        return todo;
      }
      return stateTodo;
    });
  };

  const removeTodo = (id) => {
    const newState = state.filter((stateTodo) => {
      if (stateTodo.id !== id) {
        return stateTodo;
      }
    });
    setState(newState);
  };

  useEffect(() => {
    if (route?.params?.todo) {
      const {todo} = route.params;

      if (todo.id) {
        const stateMerged = stateMerge(todo);
        setState(stateMerged);
      } else {
        setState([...state, {...todo, id: getMaxId(state)}]);
      }

      navigation.setParams({todo: null});
    }
  }, [route, state, navigation, stateMerge]);

  return (
    <FlatList
      style={style.container}
      data={state}
      renderItem={(props) => <CardList {...props} removeTodo={removeTodo} />}
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
    paddingBottom: height * 0.05,
    backgroundColor: '#fffdfd',
  },
});

export default HomeScreen;
