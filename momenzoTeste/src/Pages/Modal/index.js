import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions, Button, LogBox} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const { height } = Dimensions.get('window');





function Modal({ show, close, navigation }) {
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
        
        LogBox.ignoreAllLogs(true); // xD
    }, [show])



    return (
  


            <Animated.View style={[styles.container, { opacity: state.opacity, transform: [{ translateY: state.container }] }]}>
                <Animated.View style={[styles.modal, { transform: [{ translateY: state.modal }] }]}>
                    
                        <View style={styles.indicador} />

                        <View style={styles.dir}>
                            <TouchableOpacity style={styles.btnAprendiz} onPress={() => navigation.push('Project')} >
                                <Text style={{ color: '#FFF' }}>Aprendizado</Text>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.btnPro} onPress={() => navigation.push('CameraPro')}>
                                <Text style={{ color: '#FFF' }}>Profissional</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.btn} onPress={close}>
                            <Text style={{ color: '#FFF', fontSize: 25, fontWeight: 'bold' }}>Fechar</Text>
                        </TouchableOpacity>
                   
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
        backgroundColor: '#00D58B',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },

    btnAprendiz: {
        backgroundColor: '#00D58B',
        marginBottom: '2%',
        marginTop: '3%',
        width: '50%',
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: '1%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },

    btnPro: {
        backgroundColor: '#00D58B',
        marginBottom: '2%',
        marginTop: '3%',
        width: '50%',
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 6
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 6
    },
    dir: {
        flexDirection: 'row',
        height: '58%',
        marginTop: 40
    }
})