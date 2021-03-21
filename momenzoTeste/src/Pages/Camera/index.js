import React, { useState, useRef, useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, Modal, Image, PermissionsAndroid, Platform, TextInput } from 'react-native';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';
import { RNCamera } from 'react-native-camera'
import CameraRoll from '@react-native-community/cameraroll';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function Camera() {

    const [modalOpen, setModalOpen] = useState(false)
    const [videoRecording, setVideoRecording] = useState(false)
    const [isPreview, setIsPreview] = useState(false)
    const [videoSource, setVideoSource] = useState(null)
    const [cameraReady, setCameraReady] = useState(false)
    const [saveVideos, setSaveVideo] = useState([]);



    const cameraRef = useRef();
    const video = useRef(null)
    const STORAGE_KEY = '@save_video'
   


    useEffect(() => {
        (async () => {

            const { status } = await PermissionsAndroid.request(permission)
            return status
        })

    }, [])

    const onSubmitEditing = () => {
        if (!videoSource) return

        videoSave(videoSource)
        setSaveVideo([])
    }

    const videoSave = async () => {
        let listVideos = {
            id: new Date().getTime(),
            uri: videoSource
        }
        
        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(listVideos))
            console.log('Storage salvo com sucesso')
            console.log(JSON.stringify(listVideos))
        } catch (e) {
            console.log('Erro ao salvar ' + e)
        }

    }

    const onCameraReady = () => {
        setCameraReady(true)
    }



    //teste para tirar foto
    /*  const takePickture = async () => {
         if (cameraRef.current) {
             const options = { quality: 0.5, base64: true };
             const data = await cameraRef.current.takePictureAsync(options);
             const source = data.uri;
             if (source) {
                 //await cameraRef.current.pausePreview();
                 //setIsPreview(true);
                 setModalOpen(true)
                 setCapturaPhoto(source)
                 savePicture(source)
                 console.log('picuture source', source)
             }
         }
     } */


    const recordVideo = async () => {
        if (cameraRef.current) {
            try {
                const videoRecordingPromise = cameraRef.current.recordAsync();

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
            //setVideoSource(null)
        }
    }

    const stopVideo = () => {
        if (cameraRef.current) {
            setIsPreview(false);
            setVideoRecording(false);
            cameraRef.current.stopRecording();
        }
    }

    async function hasAndroidPermission() {
        const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

        const hasPermission = await PermissionsAndroid.check(permission)
        if (hasPermission) {
            return true;
        }

        const status = await PermissionsAndroid.request(permission)
        return status == 'granted';
    }

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
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.auto}
                autoFocus={RNCamera.Constants.AutoFocus.on}
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
                        <View style={{ marginBottom: 35, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>


                            {videoRecording === false ? (
                                <TouchableOpacity onPress={recordVideo} style={styles.capture}>
                                    <Text>gravar</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={stopVideo} style={styles.capture}>
                                    <Text>Parar</Text>
                                </TouchableOpacity>
                            )

                            }



                        </View>
                    )
                }}
            </RNCamera>

            {/* capturaPhoto &&
                <Modal animationType="slide" transparent={false} visible={modalOpen}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                        <Image

                            style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
                            source={{ uri: capturaPhoto }}
                        />

                        <TouchableOpacity style={{ backgroundColor: "#131313", borderRadius: 5, width: '20%', height: '5%', justifyContent: 'center', alignItems: 'center', marginTop:'150%' }} onPress={() => setModalOpen(!modalOpen)}>
                            <Text style={{ fontSize: 20, color: '#FFF', fontWeight: 'bold' }}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </Modal> */
            }
            {videoSource &&
                <Modal animationType="slide" transparent={false} visible={modalOpen} onRequestClose={() => setModalOpen(!modalOpen)}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                        <Video
                            ref={video}
                            source={{ uri: videoSource }}
                            style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
                        />

                        <TouchableOpacity style={{ backgroundColor: "#000", borderRadius: 5, width: '20%', height: '5%', justifyContent: 'center', alignItems: 'center' }} onPress={() => setModalOpen(!modalOpen)}>
                            <Text style={{ fontSize: 20, color: '#FFF', fontWeight: 'bold' }}>Fechar</Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={
                                {
                                    backgroundColor: "#000",
                                    borderRadius: 5,
                                    width: '20%',
                                    height: '5%',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }
                            }

                            onPress={onSubmitEditing}
                        >
                            <Text style={{ fontSize: 20, color: '#FFF', fontWeight: 'bold' }}>Salvar</Text>
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
        backgroundColor: '#FFF',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    }
})