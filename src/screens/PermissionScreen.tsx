import React from 'react'
import { View, Text, StyleSheet, Button, Platform } from 'react-native'
import { PERMISSIONS, PermissionStatus, request } from 'react-native-permissions'

const PermissionScreen = () => {
  const checkLocationPermissions = async () => {
      let permissionStatus: PermissionStatus;
      if(Platform.OS === 'ios'){
         permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        } else {
          permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
      }
      console.log(permissionStatus);
      
  }
  return (
    <View style={styles.container} >
      <Text>PermissionScreen</Text>
      <Button title="Permissions" onPress={checkLocationPermissions} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
});

export default PermissionScreen
