import React from 'react'
import { StyleProp, StyleSheet, ViewStyle, TouchableOpacity, Text } from 'react-native'
interface Props {
  title: string,
  onPress: () => void,
  style?: StyleProp<ViewStyle>
}

const BlackButton = ({title, onPress, style = {}} : Props) => {
  return (
    <TouchableOpacity 
      activeOpacity={0.8} 
      onPress={onPress}  
      style={{...styles.blackButton, ...style as any}}
    >
      <Text style={styles.textButton} >{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    blackButton: {
      height: 50,
      width: 200,
      borderRadius: 50,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowOpacity: 0.27,
      elevation: 6
    },
    textButton: {
      color: 'white',
      fontSize: 18
    }
});

export default BlackButton
