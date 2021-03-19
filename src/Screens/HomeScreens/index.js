import React from 'react';
import {StyleSheet, Dimensions, FlatList} from 'react-native';
import CardList from './components/cardList';
const {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  //   return (
  // <View style={style.container}>
  //   <Text style={{fontSize: 20}}>Home Screen</Text>
  // </View>
  //   );

  const data = [
    {
      title: 'Tomar banho',
      id: 20,
      completed: true,
    },
    {
      title: 'Dormir',
      id: 30,
      completed: false,
    },
    {
      title: 'Tomar cafe',
      id: 40,
      completed: true,
    },
    {
      title: 'Tomar banho',
      id: 6520,
      completed: false,
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
      completed: true,
    },
    {
      title: 'Dormir',
      id: 77,
      completed: false,
    },
    {
      title: 'Tomar cafe',
      id: 56,
      completed: true,
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

  return (
    <FlatList
      style={style.container}
      data={data}
      renderItem={CardList}
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
