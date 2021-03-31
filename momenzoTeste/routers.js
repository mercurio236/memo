import React from 'react';
import { View, Text } from 'react-native'
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

import Home from './src/Pages/Home';
import Settings from './src/Pages/Settings';
import Videos from './src/Pages/Videos';
import Cam from './src/Pages/Camera';
import CameraPro from './src/Pages/CameraPro';


function Router(){
    return(
        <Stack.Navigator initialRouteName="Rota">
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
                backgroundColor: '#171717',
            }}

            drawerContentOptions={{
                labelStyle: {
                    fontWeight: 'bold'
                },
                activeTintColor: '#FFF',
                activeBackgroundColor: '#00b94a',
                inactiveBackgroundColor: '#000',
                inactiveTintColor: '#DDD',
                itemStyle: {
                    marginVertical: 5,

                },
            }}>


            <Drawer.Screen name="Projects" component={Home} options={{ headerShown: true, headerTintColor: '#000' }} />
            <Drawer.Screen name="Videos" component={Videos} options={{ headerShown: true, headerTintColor: '#000' }} />
            <Drawer.Screen name="Settings" component={Settings} options={{ headerShown: true, headerTintColor: '#000' }} />
        </Drawer.Navigator>
    )
}

export default Router;