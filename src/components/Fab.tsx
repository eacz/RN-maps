import React from 'react'
import { View, Text, StyleSheet, StyleProp, TouchableOpacity, ViewStyle  } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons';

interface Props {
  iconName: string,
  iconColor?: string
  onPress: () => void,
  style?: StyleProp<ViewStyle>
}

const Fab = ({iconName, iconColor = 'white', onPress, style = {}}: Props) => {
  return (
    <View style={{...style as any}}>
      <TouchableOpacity
        activeOpacity={0.8} onPress={onPress} 
        style={styles.blackButton}
      >
        <Icon name={iconName} color={iconColor} size={35} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  blackButton: {
    zIndex: 999,
    height: 50,
    width: 50,
    backgroundColor: 'black',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems:'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  }
});

export default Fab
