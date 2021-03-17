import React from 'react';
import {Text, View, StyleSheet, Dimensions, FlatList} from 'react-native';

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
    },
    {
      title: 'Dormir',
      id: 30,
    },
    {
      title: 'Tomar cafe',
      id: 40,
    },
    {
      title: 'Tomar banho',
      id: 6520,
    },
    {
      title: 'Dormir',
      id: 2563,
    },
    {
      title: 'Tomar cafe',
      id: 88,
    },
    {
      title: 'Tomar banho',
      id: 85,
    },
    {
      title: 'Dormir',
      id: 237,
    },
    {
      title: 'Tomar cafe',
      id: 22,
    },
    {
      title: 'Tomar banho',
      id: 87,
    },
    {
      title: 'Dormir',
      id: 77,
    },
    {
      title: 'Tomar cafe',
      id: 56,
    },
    {
      title: 'Tomar banho',
      id: 23,
    },
    {
      title: 'Dormir',
      id: 448,
    },
    {
      title: 'Tomar cafe',
      id: 12,
    },
  ];

  const CardList = ({item}) => {
    return (
      <View style={style.cardItemContainer}>
        <Text style={{fontSize: 20}}>{item.title}</Text>
      </View>
    );
  };

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
    paddingTop: height * 0.05,
    paddingBottom: height * 0.05,
  },
  cardItemContainer: {
    margin: 20,
    borderRadius: 7,
  },
});

export default HomeScreen;
