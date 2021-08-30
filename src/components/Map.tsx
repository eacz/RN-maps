import React, {useRef, useState, useEffect} from 'react'
import { StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import useLocation from '../hooks/useLocation';
import LoadingScreen from '../screens/LoadingScreen';
import Fab from './Fab';

interface Props {
  markers?: Marker[]
}

const Map = ({markers = []}: Props) => {
  const { 
    hasLocation, initialPosition, userLocation, routeLines, 
    getCurrentLocation, followUserLocation, stopFollowUserLocation 
  } = useLocation()
  const [showPolyline, setShowPolyline] = useState(false)
  const following = useRef<boolean>(true)
  const mapViewRef = useRef<MapView>()

  //When the component is mounted, start to follow the user
  useEffect(() => {
    followUserLocation()
    return () => {
      stopFollowUserLocation()
    }
  }, [] )

  //Follow the user if they are moving
  useEffect(() => {
    if(!following.current) return;
    mapViewRef.current?.animateCamera({
      center: userLocation,
    })
  }, [userLocation])

  const centerPosition = async () => {
    const location = await getCurrentLocation()
    following.current = true;
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
        onTouchStart={() => following.current = false}
      >
        <Marker
          //image={require('../assets/custom-marker.png')}
          title="yyo" description="yyo en resi"
          coordinate={{
            latitude: -27.4257175,
            longitude: -59.0243784
          }}
        />
        { showPolyline &&  <Polyline coordinates={routeLines} strokeColor="black" strokeWidth={3} /> }

      </MapView>
      <Fab 
        style={styles.fabCenterLocation} iconName="compass-outline" 
        onPress={() => centerPosition()} 
      />
      <Fab 
        style={styles.fabShowPolyline} iconName="brush-outline" 
        onPress={() => setShowPolyline(value => !value)} 
      />
    </>
  )
}

const styles = StyleSheet.create({
  fabCenterLocation: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  fabShowPolyline: {
    position: 'absolute',
    bottom: 20,
    right: 80,
  }
});

export default Map
