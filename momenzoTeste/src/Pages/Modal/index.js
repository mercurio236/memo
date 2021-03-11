import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';



const { height } = Dimensions.get('window');



const Modal = ({ show, close }) => {
    const [state, setState] = useState({
        opacity: new Animated.Value(0),
        container: new Animated.Value(height),
        modal: new Animated.Value(height)
        
    })

    const openModal = () => {
        Animated.sequence([
            Animated.timing(state.container, { toValue: 0, duration: 100 }),
            Animated.timing(state.opacity, { toValue: 1, duration: 300 }),
            Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: true })
        ]).start()
    }

    const closeModal = () => {
        Animated.sequence([
            Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: true }),
            Animated.timing(state.opacity, { toValue: 0, duration: 300 }),
            Animated.timing(state.container, { toValue: height, duration: 100 })
        ]).start()
    }

    useEffect(() => {
        if (show) {
            openModal()
        } else {
            closeModal()
        }
        console.disableYellowBox = true;
    }, [show])


    return (
        <Animated.View style={[styles.container, { opacity: state.opacity, transform: [{ translateY: state.container }] }]}>
            <Animated.View style={[styles.modal, { transform: [{ translateY: state.modal }] }]}>
                <View style={styles.indicador} />

                <View style={styles.dir}>
                    <TouchableOpacity style={styles.btnAprendiz}>
                        <Text style={{color:'#FFF'}}>Aprendizado</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnPro}>
                        <Text style={{color:'#FFF'}}>Profissional</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.btn} onPress={close}>
                    <Text style={{ color: '#FFF' }}>Fechar</Text>
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
        height: '50%',
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

    btnAprendiz:{
    backgroundColor:'#000',
    marginBottom:'2%',
    marginTop:'3%',
    width: '50%',
    borderRadius:20,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginEnd:'1%'  
    },

    btnPro:{
    backgroundColor:'#000',
    marginBottom:'2%',
    marginTop:'3%',
    width: '50%',
    borderRadius:20,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    },
    dir:{
        flexDirection: 'row',
        height:'65%'
    }
})