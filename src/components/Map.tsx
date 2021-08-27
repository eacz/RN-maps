import React from 'react'
import { useRef } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import useLocation from '../hooks/useLocation';
import LoadingScreen from '../screens/LoadingScreen';
import Fab from './Fab';

interface Props {
  markers?: Marker[]
}

const Map = ({markers = []}: Props) => {
  const { hasLocation, initialPosition, getCurrentLocation } = useLocation()
  const mapViewRef = useRef<MapView>()

  const centerPosition = async () => {
    const location = await getCurrentLocation()
    mapViewRef.current?.animateCamera({
      center: location,
    })
  }
  
  if(!hasLocation) {
    return (
      <LoadingScreen />
    )
  }

  return (
    <>  
       <MapView
        ref={el => mapViewRef.current = el!}
        showsUserLocation
        style={{flex: 1}}
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          //image={require('../assets/custom-marker.png')}
          title="yyo" description="yyo en resi"
          coordinate={{
            latitude: -27.4257175,
            longitude: -59.0243784
          }}
        />
      </MapView>
      <Fab 
        style={styles.fabStyle} iconName="compass-outline" 
        onPress={() => centerPosition()} 
       />
    </>
  )
}

const styles = StyleSheet.create({
  fabStyle: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  }
});

export default Map
