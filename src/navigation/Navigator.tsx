import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PermissionScreen from '../screens/PermissionScreen'
import MapScreen from '../screens/MapScreen'
import { PermissionsContext } from '../context/PermissionsContext'
import LoadingScreen from '../screens/LoadingScreen'

const Stack = createStackNavigator()

const Navigator = () => {
  const {permissions} = useContext(PermissionsContext)

  if(permissions.locationStatus === 'unavailable'){
    return <LoadingScreen />
  }
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {
        permissions.locationStatus === 'granted' 
          ? <Stack.Screen name='MapScreen' component={MapScreen} />
          : <Stack.Screen name='PermissionScreen' component={PermissionScreen} />
      }
    </Stack.Navigator>
  )
}

export default Navigator
