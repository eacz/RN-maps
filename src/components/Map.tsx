import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import useLocation from '../hooks/useLocation';
import LoadingScreen from '../screens/LoadingScreen';

interface Props {
  markers?: Marker[]
}

const Map = ({markers = []}: Props) => {
  const { hasLocation, initialPosition } = useLocation()
  
  if(!hasLocation) {
    <LoadingScreen />
  }

  return (
    <>
       <MapView
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
    </>
  )
}

export default Map
