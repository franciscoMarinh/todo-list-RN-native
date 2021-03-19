// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import HeaderRight from './components/HeaderRight';

import HomeScreen from './Screens/HomeScreens';
import HandleTodo from './Screens/HandleTodo';

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HandleTodo"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#9c88ff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Todo - list',
            // headerRight: () => <HeaderRight />,
          }}
        />
        <Stack.Screen
          name="HandleTodo"
          component={HandleTodo}
          options={{
            title: 'Adicionar um novo todo',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
