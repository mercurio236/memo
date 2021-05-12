import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import Router from './src/Pages/Router';
import AuthProvider from './src/Pages/Context/auth';




function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar hidden={true} backgroundColor="#131313" barStyle="light-content" />
        <Router />
        
      </AuthProvider>
    </NavigationContainer>

  )
}

export default App;
