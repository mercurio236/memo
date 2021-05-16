import React, { useState, useEffect } from 'react'
import { Picker as RNPickerSelect } from '@react-native-picker/picker';
import { PickerView } from './styles';
import { View, Text, SafeAreaView, StyleSheet, Switch } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { resolutionCam, selectedRes } from '../../Redux/ConfigCam/action'
import AsyncStorange from '@react-native-async-storage/async-storage';

export default function Settings() {
    const [qualidade, setQualidade] = useState();
    const [estabilidade, setEstabilidade] = useState(false)
    const [dicas, setDicas] = useState(false)
    const dispatch = useDispatch()

    const settingCam = useSelector((state) => state.resolutionCam.resolutionCam)
  


    const estabili = () => setEstabilidade(previousState => !previousState)
    const dicasVideo = () => setDicas(previousState => !previousState)

    useEffect(() => {
        //incia com o valor salvo no asyncStorage
        async function loadQualidadeVideo(){
            const storageResolution = await AsyncStorange.getItem('resolution')
            
            if(storageResolution){
               dispatch(resolutionCam(storageResolution))
            }
        }
        loadQualidadeVideo()
    }, [])

    //salvar a qualidade no asyncStorage
    async function qualidadeVideo(data){
        await AsyncStorange.setItem('resolution', settingCam)
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.body}>
                <Text style={styles.text}>Qualidade do Video</Text>
                <PickerView>
                    <RNPickerSelect
                        style={{
                            width: '100%'
                        }}
                        selectedValue={settingCam}
                        onValueChange={(valor) => qualidadeVideo(dispatch(resolutionCam(valor)))}
                    >
                        <RNPickerSelect.Item label="720p" value="720p" />
                        <RNPickerSelect.Item label="1080p" value="1080p" />
                    </RNPickerSelect>
                </PickerView>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text}>Estabilazação de Video</Text>
                    <Switch
                        style={{ marginLeft: '25%', marginTop: '2%' }}
                        onValueChange={estabili}
                        value={estabilidade}
                    />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text}>Mostrar dicas de Video</Text>
                    <Switch
                        style={{ marginLeft: '25%', marginTop: '2%' }}
                        onValueChange={dicasVideo}
                        value={dicas}
                    />
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    text: {
        color: '#000',
        margin: 10,
        fontSize: 20
    },
    body: {
        marginTop: '5%',
        paddingLeft: '3%'
    },
    picker: {
        backgroundColor: '#000',
        width: '17%',
        height: '20%',
        margin: 20,
        justifyContent: 'center',
        marginTop: '5%',
        borderRadius: 6
    }
})