import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, Modal, RefreshControl } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import Video from 'react-native-video';

export default function ListaDeVideos({ data }) {

    const [modal, setModal] = useState(false)

    const video = useRef(null)
    const v = useSelector((state) => state.resolutionCam.saveVideoList)
    console.log('Videos salvos: ', v)


    return (
        <ScrollView >

            {
                data !== null ?
                    <View>
                        <TouchableOpacity style={styles.listaVideos} onPress={() => setModal(!modal)}>
                            <Text>ID: {data.id}</Text>
                            <Text>Uri: {data.uri}</Text>
                        </TouchableOpacity>

                        <Modal key={data.id} visible={modal} transparent={false}>
                            <TouchableOpacity onPress={() => setModal(!modal)}>
                                <Text>Fechar</Text>
                            </TouchableOpacity>
                            <Video
                                ref={video}
                                source={{ uri: data.uri }}
                                style={{ position: 'absolute', top: '8%', left: '-112%', bottom: 0, right: 0, transform: [{ rotate: '90deg' }], width: '212%', height: '100%' }}
                            />
                        </Modal>
                    </View>

                    :
                    <Text style={{ color: '#FFF', fontSize: 20 }}>Galeria vazia{data}</Text>
            }

        </ScrollView>


    )

}

const styles = StyleSheet.create({
    listaVideos: {
        backgroundColor: '#77807C',
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

    textPosition: {
        top: -40,
        marginLeft: 110,
        top: -45

    }
})