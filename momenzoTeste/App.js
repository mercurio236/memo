import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import Router from './routers';


function App() {
  return (
    <NavigationContainer>
      <StatusBar/>
      <Router/>
    </NavigationContainer>
    
  )
}

export default App;
