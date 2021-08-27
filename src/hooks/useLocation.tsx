import Geolocation from "@react-native-community/geolocation";
import { useState, useEffect } from "react";
import { Location } from "../interfaces/location";

const useLocation = () => {
  
  const [hasLocation, setHasLocation] = useState(false)
  const [initialPosition, setInitialPosition] = useState<Location>({longitude: 0, latitude: 0})

  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({ coords }) => {
        setInitialPosition({
          latitude: coords.latitude, longitude: coords.longitude 
        })
        setHasLocation(true)
      },
      err => console.log(err),
      { enableHighAccuracy: true }
    );
  }, [])


  return {
    hasLocation, 
    initialPosition
  }
}

export default useLocation