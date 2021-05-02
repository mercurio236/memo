import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { AuthContext } from '../Context/auth';

import AuthRouter from './authRouter';
import AppRouter from './appRouter';

function Router() {
    const { signed, loading } = useContext(AuthContext)

    if(loading){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator size="large" color="#131313"/>
            </View>
        )
    }
    return(
        signed ? <AppRouter/> : <AuthRouter/> 
    )

}

export default Router;