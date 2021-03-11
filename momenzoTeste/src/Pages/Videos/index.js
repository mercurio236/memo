import React from 'react';
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';

export default function Videos() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.text}>Não há videos em sua Galeria</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    text: {
        color: '#FFF',
        fontSize:20
    },

    body:{
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
        marginTop:'80%'
    }
})