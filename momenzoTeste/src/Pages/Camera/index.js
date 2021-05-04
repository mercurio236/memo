import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    Modal,
    Image,
    PermissionsAndroid,
    Platform,
    Alert,
    ToastAndroid,
    Animated

} from 'react-native';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';
import { RNCamera } from 'react-native-camera'
import CameraRoll from '@react-native-community/cameraroll';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';

import Arrow from '../../Assets/arrow.json'



export default function Camera({ navigation }) {

    const [modalOpen, setModalOpen] = useState(false)
    const [videoRecording, setVideoRecording] = useState(false)
    const [isPreview, setIsPreview] = useState(false)
    const [videoSource, setVideoSource] = useState(null)
    const [cameraReady, setCameraReady] = useState(false)
    const [saveVideos, setSaveVideo] = useState({ videos: [] });
    const [capturaPhoto, setCapturaPhoto] = useState(null)

    //animation 
    const [slideLeft, setSlideLeft] = useState(new Animated.Value(0))

    const start = () => {
        return Animated.parallel([
            Animated.timing(setSlideLeft, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            })
        ]).start();
    }


    const cameraRef = useRef();
    const video = useRef(null)
    const STORAGE_KEY = '@save_video'



    useEffect(() => {
        (async () => {
            const { status } = await PermissionsAndroid.request(permission)
            return status
        })
        
    }, [])

    const saveVideo = () => {
        if (!saveVideos) return
        videoSave(saveVideos)
        Alert.alert('Video ', 'Deseja salvar o video em sua galeria?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Salvar',
                    onPress: () => savePicture(videoSource) ? ToastAndroid.show("Salvo com sucesso", ToastAndroid.SHORT) : ToastAndroid.show("Erro ao salvar video", ToastAndroid.SHORT)
                },

            ]
        )

        //setSaveVideo(saveVideos)
    }

    const savePic = () => {
        Alert.alert('Foto ', 'Deseja salvar foto em sua galeria?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Salvar',
                    onPress: () => savePicture(capturaPhoto) ? ToastAndroid.show("Salvo com sucesso", ToastAndroid.SHORT) : ToastAndroid.show("Erro ao salvar imagem", ToastAndroid.SHORT)
                },

            ]
        )

    }

    const videoSave = async () => {
        let newVideo = { ...saveVideos }
        let listVideos = {
            id: new Date().getTime(),
            uri: videoSource
        }
        newVideo.videos.push(listVideos)

        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newVideo))
            console.log('Storage salvo com sucesso')
            console.log(JSON.stringify(listVideos))
        } catch (e) {
            console.log('Erro ao salvar ' + e)
        }

    }

    const onCameraReady = () => {
        setCameraReady(true)
    }



    //Tirar foto
    const takePickture = async () => {
        if (cameraRef.current) {
            const options = { quality: 0.5, base64: true };
            const data = await cameraRef.current.takePictureAsync(options);
            const source = data.uri;
            if (source) {
                //await cameraRef.current.pausePreview();
                //setIsPreview(true);
                setModalOpen(true)
                setCapturaPhoto(source)
                console.log('picuture source', source)
            }
        }
    }


    const recordVideo = async () => {
        if (cameraRef.current) {
            try {
                const options = { quality: 1, base64: true }
                const videoRecordingPromise = cameraRef.current.recordAsync(options);

                if (videoRecordingPromise) {
                    setVideoRecording(true);
                    const data = await videoRecordingPromise;
                    const source = data.uri;

                    if (source) {
                        setIsPreview(true);
                        console.log('video salvo ', source)
                        setModalOpen(true)
                        setVideoSource(source)
                    }
                }
            } catch (err) {
                console.warn(err)
            }
        }
    }

    const stopVideo = () => {
        if (cameraRef.current) {
            setIsPreview(false);
            setVideoRecording(false);
            cameraRef.current.stopRecording();
        }
    }

    //autorização para salvar no dispositivo
    async function hasAndroidPermission() {
        const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

        const hasPermission = await PermissionsAndroid.check(permission)
        if (hasPermission) {
            return true;
        }

        const status = await PermissionsAndroid.request(permission)
        return status == 'granted';
    }

    //Dispara a function para salvar no dispositivo
    async function savePicture(data) {
        if (Platform.OS == 'android' && !(await hasAndroidPermission())) {
            return;
        }

        CameraRoll.save(data, 'photo')
            .then((res) => {
                console.log('Salvo com sucesso: ' + res)
            })
            .catch((err) => {
                console.log('Erro ao salvar: ' + err)
            })
    }




    return (

        <View style={styles.container}>

            <StatusBar hidden={true} />
            <RNCamera
                ref={cameraRef}
                playSoundOnCapture={true}
                style={styles.preview}
                defaultVideoQuality={RNCamera.Constants.VideoQuality['720p']}


                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.auto}
                autoFocus={RNCamera.Constants.AutoFocus.on}
                ratio="8:4"
                focusDepth={1}
                androidCameraPermissionOptions={{
                    title: 'Permissão para usar a camera',
                    message: 'é necessáro autorização para o uso da camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancelar'
                }}

            >

                {({ camera, status, recordAudioPermissionStatus }) => {
                    if (status !== 'READY') return <View />
                    return (
                        <View>
                           
                                <LottieView style={styles.arrow} resizeMode="container" source={Arrow} autoPlay loop />
                           
                            <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Projects')}>
                                <Icon name="arrow-left" color="#FFF" size={30} />
                            </TouchableOpacity>


                            <View style={{ marginBottom: 5, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', marginLeft: 80 }}>
                                {videoRecording === false ? (
                                    <TouchableOpacity onPress={recordVideo} style={styles.capture}>
                                        <Icon name="circle" color="#FFF" size={70} />
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity onPress={stopVideo} style={styles.capture}>
                                        <Icon name="stop" color="red" size={70} />
                                    </TouchableOpacity>
                                )

                                }
                                <TouchableOpacity style={styles.capture} onPress={takePickture}>
                                    <Icon name="camera" size={40} color="#FFF" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }}

            </RNCamera>



            {

                capturaPhoto &&
                <Modal name="modalFoto" animationType="slide" transparent={false} visible={modalOpen}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                        <Image
                            style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
                            source={{ uri: capturaPhoto }}
                        />

                        <TouchableOpacity style={styles.btnFechar} onPress={() => setModalOpen(!modalOpen)}>
                            <Text style={{ fontSize: 20, flex: 1, justifyContent: 'center', alignItems: 'center', margin: 5, marginTop: -6 }}></Text>
                            <Icon name="times" size={40} color="#FFF" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnSalvar} onPress={savePic}>
                            <Icon name="save" size={40} style={{ top: -5 }} />
                        </TouchableOpacity>
                    </View>
                </Modal>


                ||


                videoSource &&
                <Modal name="modalVideo" animationType="slide" transparent={false} visible={modalOpen}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                        <Video
                            ref={video}
                            source={{ uri: videoSource }}
                            style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
                        />

                        <TouchableOpacity style={styles.btnFechar} onPress={() => setModalOpen(!modalOpen)}>
                            <Text style={{ fontSize: 20, flex: 1, justifyContent: 'center', alignItems: 'center', margin: 5, marginTop: -6 }}></Text>
                            <Icon name="times" size={40} color="#FFF" />
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.btnSalvar} onPress={saveVideo}>
                            <Icon name="save" size={40} style={{ top: -5 }} />
                        </TouchableOpacity>
                    </View>
                </Modal>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        marginLeft: 30
    },
    btnFechar: {
        borderRadius: 25,
        padding: 10,
        height: 40,
        position: 'absolute',
        right: 15,
        top: 10
    },
    btnSalvar: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        padding: 10,
        height: 50,
        position: 'absolute',
        right: 25,
        top: 750,
    },
    back: {
        padding: 10,
        position: 'absolute',
        top: -550,
        right: 303,
        zIndex: 1
    },
    arrow: {
        width: 150,
        marginLeft: 40,
        top: -300
    }
})