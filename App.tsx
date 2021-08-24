import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import PermissionsProvider from './src/context/PermissionsContext';
import Navigator from './src/navigation/Navigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({children}: {children: JSX.Element | JSX.Element[]}) => {
  return (
    <PermissionsProvider>
      {children}
    </PermissionsProvider>
  )
}

export default App
