import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, Platform, TouchableOpacity, StatusBar } from 'react-native';
import LinearGradient  from 'react-native-linear-gradient';

import {AuthContext} from '../Context/auth'


export default function Login({ navigation }) {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const {logar} = useContext(AuthContext);


    async function handleLogin() {
        logar(email, password)
    }

    return (

        <View style={styles.container}>
            <StatusBar hidden={true} />

            <LinearGradient colors={['#0BFFE3', '#557EE7', '#9B05EB']} start={{x: -2, y: 0}} end={{x: 1.4, y: 1}} style={styles.linearGradient}>
            <KeyboardAvoidingView style={styles.key} behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>

                <View style={styles.areaInpur}>
                    <TextInput
                        style={styles.inputs}
                        placeholder="E-mail"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        autoCorrect={false}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>

                <View style={styles.areaInpur}>
                    <TextInput
                        style={styles.inputs}
                        placeholder="Senha"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>

                
                <TouchableOpacity style={styles.btnLogar} onPress={handleLogin}>
                    <Text style={styles.submitText}>Logar</Text>
                </TouchableOpacity>
               

                <TouchableOpacity onPress={() => navigation.push('Cadastro')} style={styles.btnCadastro}>
                    <Text style={styles.cadastroLink}>Cadastrar</Text>
                </TouchableOpacity>



            </KeyboardAvoidingView>
        
                </LinearGradient>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131313',
    },
    areaInpur: {
        flexDirection: 'row'
    },
    inputs: {
        backgroundColor: 'rgba(0,0,0,0.20)',
        width: '90%',
        fontSize: 19,
        color: '#FFF',
        marginBottom: 15,
        padding: 10,
        borderRadius: 7
    },
    btnLogar: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6FBAEB',
        width: '90%',
        height: 45,
        borderRadius: 7,
        marginTop: 10
    },
    key: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitText: {
        fontSize: 20,
        color: '#FFF',
        fontWeight:'bold'
    },
    btnCadastro: {
        marginTop: 10,
        marginBottom: 9

    },
    cadastroLink: {
        color: '#FFF'
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
})