import React, { useState, useEffect, useContext } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    FlatList,
    Modal,
    Image,
    KeyboardAvoidingView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Video from 'react-native-video';
import ModalOpen from '../Modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListaVideos from '../Home/listaVideos';
import { useDispatch, useSelector } from 'react-redux'


import { AuthContext } from '../Context/auth'
import { Platform } from 'react-native';
import { resolutionCam, selectedRes } from '../../Redux/ConfigCam/action'





function Home({ navigation }) {
    const [modalNewProject, setModalNewProject] = useState(false);
    const [modal, setModal] = useState(false)
    const [teste, setTeste] = useState('')
    const [videos, setVideos] = useState([]);
    const [listVideo, setListVideo] = useState([
        { id: '1', title: 'video 1', date: '20/04/2021', hora: '15:11' },
        { id: '2', title: 'video 2', date: '20/04/2021', hora: '15:12' },
        { id: '3', title: 'video 3', date: '20/04/2021', hora: '15:13' },
        { id: '4', title: 'video 4', date: '20/04/2021', hora: '15:14' },
    ])

    const { user, signOut } = useContext(AuthContext)
    const settingCam = useSelector((state) => state.resolutionCam.resolutionCam)
    const dispatch = useDispatch()


    const STORAGE_KEY = 'save_video';
    const R = 'resolution';
    const ESTABILIZATION_VIDEO = 'estabilizar';

    useEffect(() => {
        rollVideos()
        setModalNewProject(true)
        testeS()
        console.log(user)
    }, [])

   async function testeS(){
        const c = await AsyncStorage.getItem(ESTABILIZATION_VIDEO)
        setTeste(c)
        
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

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'height' : 'padding'} style={styles.container}>
            <StatusBar hidden={true} />

            <View style={styles.body} >

                <FlatList
                    data={listVideo}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <ListaVideos data={item} />}

                />
                <Text style={{color:'#000'}}>{teste}</Text>


                <TouchableOpacity style={styles.btnAdd} onPress={() => setModal(true)}>
                    <Icon name="plus" size={30} />
                </TouchableOpacity>

            </View>
            <ModalOpen show={modal} close={() => setModal(false)} navigation={navigation} />





        </KeyboardAvoidingView>



    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
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
        marginLeft: '80%',
        elevation: 6
    },
    linearGradient: {
        flex: 1,
    },
    headerModal: {
        backgroundColor: '#E3E3E3',
        height: 60,
        borderBottomEndRadius: 7,
        zIndex: 5
    },
    btnPro: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 18
    },
    textModal: {
        fontSize: 18,
        color: '#9B05EB'
    },
    btnsProjects: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        marginTop: '7%',

    },
    btnAprendizado: {
        backgroundColor: '#6FBAEB',
        width: '45%',
        height: 250,
        marginEnd: 10,
        borderRadius: 5
    },
    btnProfissional: {
        backgroundColor: '#6FBAEB',
        height: 250,
        width: '45%',
        borderRadius: 5

    }

})