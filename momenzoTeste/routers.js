import React,{useContext} from 'react';
import { View, Text } from 'react-native'
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import {AuthContext} from './src/Pages/Context/auth';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

import Login from './src/Pages/Login';
import Cadastro from './src/Pages/Cadastro';
import Home from './src/Pages/Home';
import Settings from './src/Pages/Settings';
import Videos from './src/Pages/Videos';
import Cam from './src/Pages/Camera';
import CameraPro from './src/Pages/CameraPro';


function Router(){
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="Cadastro" component={Cadastro} options={{headerTintColor:'#FFF', headerStyle:{ backgroundColor:'#734AE9'}}}/>
            <Stack.Screen name="Rota" component={RouterSecundaria} options={{headerShown:false}}/>
            <Stack.Screen name="Camera" component={Cam} options={{headerShown:false}}/>
            <Stack.Screen name="CameraPro" component={CameraPro} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}



function RouterSecundaria() {
    return (
        <Drawer.Navigator initialRouteName="Home"
            drawerStyle={{
                backgroundColor: '#1B0067',
            }}

            drawerContentOptions={{
                labelStyle: {
                    fontWeight: 'bold'
                },
                activeTintColor: '#FFF',
                activeBackgroundColor: '#557EE7',
                inactiveBackgroundColor: '#0F0136',
                inactiveTintColor: '#DDD',
                itemStyle: {
                    marginVertical: 5,

                },
            }}>


            <Drawer.Screen name="Projects" component={Home} options={{ headerShown: true, headerTintColor:'#FFF', headerStyle:{ backgroundColor:'#734AE9'}}} />
            <Drawer.Screen name="Videos" component={Videos} options={{ headerShown: true, headerTintColor:'#FFF', headerStyle:{ backgroundColor:'#734AE9'}}} />
            <Drawer.Screen name="Settings" component={Settings} options={{ headerShown: true, headerTintColor:'#FFF', headerStyle:{ backgroundColor:'#734AE9'}}} />
        </Drawer.Navigator>
    )
}

export default Router;