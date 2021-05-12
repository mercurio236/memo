import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux';

import store from './src/Redux'

import Router from './src/Pages/Router';
import AuthProvider from './src/Pages/Context/auth';



function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthProvider>
          <StatusBar hidden={true} backgroundColor="#131313" barStyle="light-content" />
          <Router />

        </AuthProvider>
      </NavigationContainer>
    </Provider>

  )
}

export default App;
