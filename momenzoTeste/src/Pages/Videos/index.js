import React, { useState, useEffect, useRef } from 'react';
import { View, SafeAreaView, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Video from 'react-native-video';
import ListaDeVideos from '../Videos/listaDeVideos';
import LinearGradient from 'react-native-linear-gradient';





export default function Videos() {
    const [videos, setVideos] = useState([])
    const [teste, setTeste] = useState([])
    const [rolo, setRolo] = useState([{id:'1', title:'Video 1', date:'20/04/2021', hora:'15:20'}])

    const STORAGE_KEY = 'save_video'


    useEffect(() => {
        roloVideos()
       

    }, [])

    



    const clearData = async () => {
        try {
            await AsyncStorage.clear()
            console.log('Async limpo com sucesso')
        } catch (e) {
            console.log('Erro ao limpar', e)
        }
    }


    const roloVideos = async () => {

        try {
            const userVideo = await AsyncStorage.getItem(STORAGE_KEY)
            const v = JSON.parse(userVideo)
            const {videos} = v
            if (v !== null) {
                setRolo(videos)
                console.log("Rolo ", videos)
            }
        } catch (e) {
            console.log('Erro ao consultar ' + e)
        }
    }

    function ListVideo() {
        return (
            <Video
                style={
                    {
                        width: 350,
                        height: 700,
                        borderRadius: 15,
                        marginLeft: 6,
                        marginBottom: '4%'
                    }
                }
                source={{ uri: rolo.uri }}
            />
        )
    }








    //Serve para busca videos da galeria externa
    /* const videosRoll = () => {
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
    } */

    return (
        <View style={styles.container}>
             
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.body}>
                    <Text style={styles.text}>Não há videos em sua Galeria </Text>

                    <FlatList
                        data={rolo}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <ListaDeVideos data={item}/> }
                    />
                    
                

                    <TouchableOpacity onPress={clearData}>
                        <Text style={{color:'#000'}}>Limpar Storage</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    text: {
        color: '#000',
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