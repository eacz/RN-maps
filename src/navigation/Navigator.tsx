import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import PermissionScreen from '../screens/PermissionScreen';
import MapScreen from '../screens/MapScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="PermissionScreen" component={PermissionScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  );
}

export default Navigator