import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from '../Login';
import Cadastro from '../Cadastro';

export default function AppRouters(){
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="Cadastro" component={Cadastro} options={{headerTintColor:'#FFF', headerStyle:{ backgroundColor:'#00D58B'}}}/>
        </Stack.Navigator>
    )
}