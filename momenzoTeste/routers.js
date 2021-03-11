import React from 'react';
import { View, Text } from 'react-native'
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

import Home from './src/Pages/Home';
import Settings from './src/Pages/Settings';
import Videos from './src/Pages/Videos';
import Camera from './src/Pages/Camera';


function Router() {
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
                <Drawer.Screen name="Camera" component={Camera}/>
            </Drawer.Navigator>
        
    )
}

export default Router;