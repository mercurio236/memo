import React, { useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, Modal, Image, Button } from 'react-native';
import { RNCamera } from 'react-native-camera'


export default function Camera() {

    const [modalOpen, setModalOpen] = useState(false)
    const [capturaPhoto, setCapturaPhoto] = useState(null)

    async function takePickture(camera) {
        const optins = { quality: 0.5, base64: true }
        const data = await camera.takePictureAsync(optins)
        
        setCapturaPhoto(data.uri)
        setModalOpen(true)
        console.log("Foto tirada Camera" + data.uri)
    }

    const modalClose = () =>{
        setModalOpen(false)
    }

    return (

        <View style={styles.container}>
            
            <StatusBar hidden={true} />
            <RNCamera
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.auto}
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
                            <TouchableOpacity onPress={() => takePickture(camera)} style={styles.capture}>
                                <Text>Gravar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { }} style={styles.capture}>
                                <Text>Album foto</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            </RNCamera>
            
            {capturaPhoto && 
            <Modal animationType="slide" transparent={false} visible={modalOpen} onRequestClose={() => setModalOpen(!modalOpen)}>
                <View style={{flex:1, justifyContent: 'center', alignItems: 'center' }}>

                <Image
                resizeMethod="contain"
                style={{width: 350, height: 450, borderRadius:15, marginLeft:6, marginBottom:'4%'}}
                source={{uri: capturaPhoto}}
                />

                    <TouchableOpacity style={{  backgroundColor: "#000", borderRadius: 5, width: '20%', height: '5%', justifyContent: 'center', alignItems: 'center' }} onPress={() =>setModalOpen(!modalOpen)}>
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