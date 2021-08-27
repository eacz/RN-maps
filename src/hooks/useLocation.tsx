import Geolocation from "@react-native-community/geolocation";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { Location } from '../interfaces/location';

const useLocation = () => {
  
  const [hasLocation, setHasLocation] = useState(false)
  const [initialPosition, setInitialPosition] = useState<Location>({longitude: 0, latitude: 0})
  const [userLocation, setUserLocation] = useState<Location>({longitude: 0, latitude: 0})
  const watchIdRef = useRef<number>()

  useEffect(() => {
    getCurrentLocation().then(location => {
      setInitialPosition(location)
      setUserLocation(location)
      setHasLocation(true)
    })
  }, [])

  const getCurrentLocation = (): Promise<Location> => {
    return new Promise((resolve, reject) => {
     Geolocation.getCurrentPosition(
        ({ coords }) => {
          resolve({
            latitude: coords.latitude, longitude: coords.longitude 
          })
        },
        err => reject(err),
        { enableHighAccuracy: true }
      );
    })
  }

  const followUserLocation = () => {
     watchIdRef.current = Geolocation.watchPosition(
      ({coords}) => {
        setUserLocation({
          latitude: coords.latitude, longitude: coords.longitude
        })
      },
      (err) => console.log(err), {enableHighAccuracy: true, distanceFilter: 10}
    )
  }

  const stopFollowUserLocation = () => {
    if(watchIdRef.current){
      Geolocation.clearWatch(watchIdRef.current)
    }
  }

  return {
    hasLocation, 
    initialPosition,
    userLocation,
    getCurrentLocation,
    followUserLocation,
    stopFollowUserLocation
  }
}

export default useLocation