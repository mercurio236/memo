import React, { useState, useEffect, useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, StatusBar, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Video from 'react-native-video';
import Modal from '../Modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListaVideos from '../Home/listaVideos';
import firebase from '../Services/firebaseConnection';
import LinearGradient from 'react-native-linear-gradient';

import {AuthContext} from '../Context/auth'



function Home({ navigation }) {
    const [modal, setModal] = useState(false)
    const [videos, setVideos] = useState([]);
    const [listVideo, setListVideo] = useState([
        { id: '1', title: 'video 1', date: '20/04/2021', hora: '15:11' },
        { id: '2', title: 'video 2', date: '20/04/2021', hora: '15:12' },
        { id: '3', title: 'video 3', date: '20/04/2021', hora: '15:13' },
        { id: '4', title: 'video 4', date: '20/04/2021', hora: '15:14' },
    ])

    const {user, signOut} = useContext(AuthContext)


    const STORAGE_KEY = '@save_video';

    useEffect(() => {
        rollVideos()

        
        console.log(user)
    }, [])

    async function sair() {
        await firebase.auth().signOut().
            then((res) => {
                navigation.navigate('Login')
                console.log('saiu')
            }
            )
            .catch((err) => {
                console.log('Erro ao sair: ' + err)
            })

    }

    const clearData = async () => {
        try {
            await AsyncStorage.clear()
            console.log('Async limpo com sucesso')
        } catch (e) {
            console.log('Erro ao limpar' + e)
        }
    }

    async function rollVideos() {
        try {
            const userVideos = await AsyncStorage.getItem(STORAGE_KEY)
            const selectVideo = JSON.parse(userVideos)
            const { videos } = selectVideo

            if (selectVideo !== null) {
                setVideos(videos)
            }
        } catch (e) {
            console.log(`Erro ao salvar: ${e}`)
        }
    }

    return (

        <View style={styles.container}>
            <StatusBar hidden={true} />
            <LinearGradient colors={['#0BFFE3', '#557EE7', '#9B05EB']} start={{ x: -2, y: 0 }} end={{ x: 1.4, y: 1 }} style={styles.linearGradient}>
                <View style={styles.body} >

                    <FlatList
                        data={listVideo}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <ListaVideos data={item} />}

                    />
                    <Text>{user && user.nome}</Text>
                    <TouchableOpacity onPress={() => signOut()}>
                        <Text>Sair</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnAdd} onPress={() => setModal(true)}>
                        <Icon name="plus" size={30} />
                    </TouchableOpacity>
                </View>
                <Modal show={modal} close={() => setModal(false)} navigation={navigation} />
            </LinearGradient>
        </View>



    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    body: {
        color: "#FFF",
        padding: 3,
        margin: 10,
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    btnAdd: {
        backgroundColor: '#FFF',
        width: 60,
        height: 60,
        borderRadius: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '80%'
    },
    linearGradient: {
        flex: 1,
    }

})