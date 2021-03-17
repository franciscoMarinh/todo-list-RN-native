// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import HomeScreen from './Screens/HomeScreens';
import HandleTodo from './Screens/HandleTodo';

import AddMore from './Components/Header/addMore';

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
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
          options={{headerRight: () => <AddMore />}}
        />
        <Stack.Screen name="HandleTodo" component={HandleTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
