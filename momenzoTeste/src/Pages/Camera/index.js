import React, { useState, useRef, useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, Modal, Image, PermissionsAndroid, Platform } from 'react-native';
import Video from 'react-native-video';
import { RNCamera } from 'react-native-camera'
import CameraRoll from '@react-native-community/cameraroll';



export default function Camera() {

    const [modalOpen, setModalOpen] = useState(false)
    const [capturaPhoto, setCapturaPhoto] = useState(null)
    const [videoRecording, setVideoRecording] = useState(false)
    const [isPreview, setIsPreview] = useState(false)
    const [videoSource, setVideoSource] = useState(null)
    const [cameraReady, setCameraReady] = useState(false)
    const cameraRef = useRef();

    useEffect(() => {
        (async () => {

            const { status } = await PermissionsAndroid.request(permission)
            return status
        })

    }, [])

    const onCameraReady = () => {
        setCameraReady(true)
    }



    //teste para tirar foto
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
                savePicture(source)
                console.log('picuture source', source)
            }
        }
    }


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
                        console.log('video source ', source)
                        setModalOpen(true)
                        setVideoSource(source)
                        savePicture(source)
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
                            <TouchableOpacity onPress={takePickture} style={styles.capture}>
                                <Text>Tirar foto</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={recordVideo} style={styles.capture}>
                                <Text>gravar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={stopVideo} style={styles.capture}>
                                <Text>Parar</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            </RNCamera>

            {capturaPhoto &&
                <Modal animationType="slide" transparent={false} visible={modalOpen}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                        <Image
                            
                            style={{ width: 350, height: 450, borderRadius: 15, marginLeft: 6, marginBottom: '4%' }}
                            source={{ uri: capturaPhoto }}
                        />

                        <TouchableOpacity style={{ backgroundColor: "#000", borderRadius: 5, width: '20%', height: '5%', justifyContent: 'center', alignItems: 'center' }} onPress={() => setModalOpen(!modalOpen)}>
                            <Text style={{ fontSize: 20, color: '#FFF', fontWeight: 'bold' }}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            }
            {videoSource &&
                <Modal animationType="slide" transparent={false} visible={modalOpen} onRequestClose={() => setModalOpen(!modalOpen)}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                        

                        <TouchableOpacity style={{ backgroundColor: "#000", borderRadius: 5, width: '20%', height: '5%', justifyContent: 'center', alignItems: 'center' }} onPress={() => setModalOpen(!modalOpen)}>
                            <Text style={{ fontSize: 20, color: '#FFF', fontWeight: 'bold' }}>Fechar</Text>
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