import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import Camera from '../Camera';




export default function Videos() {
    const [videos, setVideos] = useState([])
    const [rolo, setRolo] = useState([])

    useEffect(() => {
        //videosRoll()
    }, [])

    const videosRoll = () => {
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'All'
        })
            .then(r => {
                setVideos({ videos: r.edges })
            })
            .catch((err) => {
                console.log('Erro' + err)
            })
    }
    return (
        <View style={styles.container}>

            <View style={styles.body}>
                <Text style={styles.text}>Não há videos em sua Galeria</Text>
                
                {
                    videos.map((i, p) => {
                        return (
                            <ScrollView>
                                <Image key={i} style={{ width: 300, height: 100 }} source={{ uri: p.node.videos.uri }} />
                            </ScrollView>
                        )
                    })
                }

            </View>

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