import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Home from '../Home';

export default function ListaVideos({ data }) {



    return (
        <ScrollView>

            {
                data !== null ?

                    <TouchableOpacity style={styles.listaVideos} onPress={() => { }}>
                        <Image style={styles.img} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                        <View style={styles.textPosition}>
                            <Text style={{ color: '#FFF', fontSize: 20 }}>Titulo: {data.title}</Text>
                            <Text style={{ color: '#FFF', fontSize: 20 }}>Data: {data.date}</Text>
                            <Text style={{ color: '#FFF', fontSize: 20 }}>Hora: {data.hora}</Text>
                        </View>
                    </TouchableOpacity>

                    :
                    <Text style={{ color: '#FFF', fontSize: 20 }}>Galeria vazia</Text>
            }

        </ScrollView>


    )

}

const styles = StyleSheet.create({
    listaVideos: {
        backgroundColor: '#FFF',
        width: 360,
        marginBottom: 10,
        height: 100,
        borderRadius: 8,
        justifyContent: 'center'
    },
    img: {
        width: 90,
        height: 90,
        top: 40
    },

    textPosition:{
        top: -40,
        marginLeft:110,
        top: -45
        
    }
})