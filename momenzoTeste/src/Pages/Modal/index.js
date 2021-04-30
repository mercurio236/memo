import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions, Button, LogBox } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const { height } = Dimensions.get('window');



function Modal({ show, close, navigation}){
    const [state, setState] = useState({
        opacity: new Animated.Value(0),
        container: new Animated.Value(height),
        modal: new Animated.Value(height)

    })

    const openModal = () => {
        Animated.sequence([
            Animated.timing(state.container, { toValue: 0, duration: 100, useNativeDriver: true }),
            Animated.timing(state.opacity, { toValue: 1, duration: 300, useNativeDriver: true }),
            Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: true })
        ]).start()
    }

    const closeModal = () => {
        Animated.sequence([
            Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: true }),
            Animated.timing(state.opacity, { toValue: 0, duration: 300, useNativeDriver: true }),
            Animated.timing(state.container, { toValue: height, duration: 100, useNativeDriver: true })
        ]).start()
    }

    useEffect(() => {
        if (show) {
            openModal()
        } else {
            closeModal()
        }
        //console.disableYellowBox = true; Deprecated, substituído por
        LogBox.ignoreAllLogs(true); // xD
    }, [show])

   

    return (
        <Animated.View style={[styles.container, { opacity: state.opacity, transform: [{ translateY: state.container }] }]}>
            <Animated.View style={[styles.modal, { transform: [{ translateY: state.modal }] }]}>
            <LinearGradient colors={['#0BFFE3', '#557EE7', '#9B05EB']} start={{ x: -2, y: 0 }} end={{ x: 1.4, y: 1 }} style={{ flex: 1, padding: 10, width:'117%', marginLeft:'-9%', borderRadius:20 }}>
                <View style={styles.indicador} />

                <View style={styles.dir}>
                    <TouchableOpacity style={styles.btnAprendiz} onPress={() => navigation.push('Camera')} >
                        <Text style={{ color: '#FFF' }}>Aprendizado</Text>
                    </TouchableOpacity>

                    
                    <TouchableOpacity style={styles.btnPro} onPress={() => navigation.push('CameraPro')}>
                        <Text style={{ color: '#FFF' }}>Profissional</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.btn} onPress={close}>
                    <Text style={{ color: '#FFF' }}>Fechar</Text>
                </TouchableOpacity>
            </LinearGradient>
            </Animated.View>
        </Animated.View>
    )
}

export default Modal;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute'
    },
    modal: {
        bottom: 0,
        position: 'absolute',
        height: '60%',
        backgroundColor: '#FFF',
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingLeft: 25,
        paddingRight: 25
    },
    indicador: {
        width: 50,
        height: 5,
        backgroundColor: '#CCC',
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: 5
    },
    text: {
        marginTop: 50,
        textAlign: 'center'
    },
    btn: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },

    btnAprendiz: {
        backgroundColor: '#000',
        marginBottom: '2%',
        marginTop: '3%',
        width: '50%',
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: '1%'
    },

    btnPro: {
        backgroundColor: '#000',
        marginBottom: '2%',
        marginTop: '3%',
        width: '50%',
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dir: {
        flexDirection: 'row',
        height: '58%'
    }
})