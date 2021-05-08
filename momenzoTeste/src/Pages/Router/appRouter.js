import React,{useContext} from 'react';
import { View, Text } from 'react-native'
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


import Home from '../Home';
import Settings from '../Settings';
import Videos from '../Videos';
import Cam from '../Camera';
import CameraPro from '../CameraPro';
import CadastroImovel from '../CadastroImovel';



function AppRouters(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Rota" component={RouterSecundaria} options={{headerShown:false}}/>
            <Stack.Screen name="Camera" component={Cam} options={{headerShown:false}}/>
            <Stack.Screen name="CameraPro" component={CameraPro} options={{headerShown: false}}/>
            <Stack.Screen name="CadastroImovel" component={CadastroImovel}/>
           
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

export default AppRouters;