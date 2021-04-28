import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, Platform, TouchableOpacity } from 'react-native';


export default function Cadastro(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={styles.container}>
            <KeyboardAvoidingView style={styles.key} behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>

                <View style={styles.areaInpur}>
                    <TextInput 
                    style={styles.inputs}
                    placeholder="Nome Completo"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={nome}
                    onChange={(text) => setNome(text)}
                    />
                </View>

                <View style={styles.areaInpur}>
                    <TextInput 
                    style={styles.inputs}
                    placeholder="E-mail"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChange={(text) => setEmail(text)}
                    />
                </View>
                
                <View style={styles.areaInpur}>
                    <TextInput 
                    style={styles.inputs}
                    placeholder="Senha"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={password}
                    onChange={(text) => setPassword(text)}
                    />
                </View>

                <TouchableOpacity style={styles.btnLogar}>
                    <Text style={styles.submitText}>Cadastrar</Text>
                </TouchableOpacity>

              
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131313'
    },
    areaInpur: {
        flexDirection: 'row'
    },
    inputs:{
        backgroundColor:'rgba(0,0,0,0.20)',
        width:'90%',
        fontSize:17,
        color:'#FFF',
        marginBottom:15,
        padding: 10,
        borderRadius: 7
    },
    btnLogar:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#00b94a',
        width:'90%',
        height:45,
        borderRadius: 7,
        marginTop:10
    },
    key:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    submitText:{
        fontSize:20,
        color:'#131313'
    },
    
})