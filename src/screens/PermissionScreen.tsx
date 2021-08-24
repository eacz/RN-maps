import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { PermissionsContext } from '../context/PermissionsContext'

const PermissionScreen = () => {
  const { permissions, askLocationPermission } = useContext(PermissionsContext)
  
  return (
    <View style={styles.container} >
      <Text>PermissionScreen</Text>
      <Button title="Permissions" onPress={askLocationPermission} />
      <Text>
        {JSON.stringify(permissions, null,5)}
      </Text>
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
