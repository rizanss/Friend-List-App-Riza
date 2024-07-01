import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FriendListScreen from './screens/FriendListScreen';
import FriendDetailScreen from './screens/FriendDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FriendList">
        <Stack.Screen name="Riza Nursyah's Friend List" component={FriendListScreen} />
        <Stack.Screen name="FriendDetail" component={FriendDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}