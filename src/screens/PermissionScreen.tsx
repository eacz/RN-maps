import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BlackButton from '../components/BlackButton'
import { PermissionsContext } from '../context/PermissionsContext'


const PermissionScreen = () => {
  const {  askLocationPermission } = useContext(PermissionsContext)
  
  return (
    <View style={styles.container} >
      <Text style={styles.title} >For use this app, location permission are needed to show you the map</Text>
      <BlackButton title="Permissions" onPress={askLocationPermission} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      width: 200,
      textAlign: 'center',
      marginBottom: 20,
      fontSize: 17
    }
});

export default PermissionScreen
