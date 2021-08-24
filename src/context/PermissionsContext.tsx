import React, { createContext } from 'react';
import { useState } from 'react';
import { PermissionStatus } from 'react-native-permissions';

export interface PermissionsState {
  locationStatus: PermissionStatus;
}

const permissionsInitState: PermissionsState = {
  locationStatus: 'unavailable'
}

type PermissionsContextProps = {
  permissions: PermissionsState,
  askLocationPermision: () => void,
  checkLocationPermision: () => void,
}

const PermissionsContext = createContext({} as PermissionsContextProps);

const PermissionsProvider = ({children }: {children: JSX.Element | JSX.Element[]} ) => {

  const [permissions, setPermissions] = useState(permissionsInitState)

  const askLocationPermision = () => {
      
  }

  const checkLocationPermision = () => {
    
  }
  return (
      <PermissionsContext.Provider
        value={{
          permissions,
          askLocationPermision,
          checkLocationPermision
        }}
      >
        {children}
      </PermissionsContext.Provider>
    )
}

export default PermissionsProvider