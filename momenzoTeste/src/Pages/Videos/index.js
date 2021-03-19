import React, { useState, useEffect, useRef } from 'react';
import { View, SafeAreaView, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Video from 'react-native-video';


export default function Videos() {
    const [videos, setVideos] = useState([])
    const [rolo, setRolo] = useState([])
    

    useEffect(() => {
        //videosRoll()

    }, [])

    const videosRoll = () => {
        const options = {
            title: 'Seleciona um video',
            chooseFromLibraryButtonTitle: 'Buscar videos do album',
            noData: true,
            mediaType: 'photo'
        }

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('Imagem Picker cancelado')
            } else if (response.error) {
                console.log('Gerou algum erro: ' + response.error)
            } else {
                setVideos(response.uri)
            }
        })
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <Text style={styles.text}>Não há videos em sua Galeria</Text>
                    
                    

                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    text: {
        color: '#FFF',
        fontSize: 20
    },

    body: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        padding: 3,
        margin: 10
    }
})