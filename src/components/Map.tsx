import React from 'react'
import MapView, { Marker } from 'react-native-maps';

interface Props {
  markers?: Marker[]
}

const Map = ({markers = []}: Props) => {
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
          coordinate={{
            latitude: -27.4257175,
            longitude: -59.0243784
          }}
          title="yyo"
          description="yyo en resi"
        />
      </MapView>
    </>
  )
}

export default Map
