import React, { useState, useContext } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import { AuthContext } from '../Context/auth'

export default function InfoUser({ navigation }) {
    const { user, signOut } = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá {user && user.nome}</Text>
            <Text style={{marginLeft:20, marginTop:-15}}>E-mail: {user && user.email}</Text>
            <View style={styles.information}>
                <Text style={styles.informationSubTitle}>Sobre sua conta</Text>
                <Text style={styles.fontInformation}>
                  Esse é um exemplo de conta logada, seja bem vindo de volta {user && user.nome} 
                    
                </Text>
                    <TouchableOpacity style={styles.btnSair} onPress={() => signOut()}>
                        <Text style={{fontSize:18, color:'#FFF'}}>Sair</Text>
                    </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 18,
    },
    information: {

    },
    informationSubTitle: {
        margin: 20,
        fontSize: 22
    },
    fontInformation: {
        marginLeft: 20,
        fontSize: 18
    },
    btnSair:{
        alignItems:'center',
        marginTop:'10%',
        backgroundColor:'#3791A6',
        margin: 100,
        height: 45,
        justifyContent:'center',
        borderRadius: 5
    }

})