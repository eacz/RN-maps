import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

interface Props {
  markers?: Marker[]
}

const Map = ({markers = []}: Props) => {
  Geolocation.getCurrentPosition(
    info => console.log(info),
    err => console.log(err),
    {
      enableHighAccuracy: true
    }
    
  );
  return (
    <>
       <MapView
        showsUserLocation
        style={{flex: 1}}
        initialRegion={{
          latitude: -27.4257175,
          longitude: -59.0243784,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          image={require('../assets/custom-marker.png')}
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
