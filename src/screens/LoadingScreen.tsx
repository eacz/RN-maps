import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} color="grey" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
});

export default LoadingScreen
