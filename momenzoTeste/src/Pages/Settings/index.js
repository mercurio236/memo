import React, { useState, useEffect } from 'react'
import { Picker as RNPickerSelect } from '@react-native-picker/picker';
import { PickerView } from './styles';
import { View, Text, SafeAreaView, StyleSheet, Switch } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { resolutionCam, estabilidadeCam, dicasVideosStatus } from '../../Redux/ConfigCam/action'
import AsyncStorange from '@react-native-async-storage/async-storage';

export default function Settings() {
    //Constantes alocados no AsyncStorage
    const RESOLUTION = 'resolution';
    const ESTABILIZATION_VIDEO = 'estabilizar';
    const DICAS = 'dicas'


    const [dicas, setDicas] = useState(false);

    const dispatch = useDispatch()

    const settingCam = useSelector((state) => state.resolutionCam.resolutionCam)// Dados de resolução  salvos no Redux
    const estabilidadeCamera = useSelector((state) => state.resolutionCam.estabilidadeCam)//Dados de estabilidade salvos no Redux
    const dicasVideos = useSelector((state) => state.resolutionCam.dicasVideosStatus)//Dados de dicas salvos no Redux



    //switch de estabilidade de video
    async function estabilization() {
        await AsyncStorange.setItem(ESTABILIZATION_VIDEO, JSON.stringify(!estabilidadeCamera))
    }


    //switch de Dicas na gravação do video
   async function dicasVideo(){
       console.log(!dicasVideos)
        try{
            await AsyncStorange.setItem(DICAS, JSON.stringify(!dicasVideos))
        }
        catch(e){
            console.log('Erro ao salvar dicas no Async Storage', e)
        }

    }

    //salvar a qualidade no asyncStorage
    async function qualidadeVideo() {
        await AsyncStorange.setItem(RESOLUTION, settingCam)
    }

    useEffect(() => {

        //inicia as dicas salvas na memoria
        async function dicasSalvas(){
            const dicas = await AsyncStorange.getItem(DICAS)

            if(dicas){
                dispatch(dicasVideosStatus(JSON.parse(dicas)))
                
            }
        }


        //inicia com switch de estabilidade de video salvo na memoria
        async function ajustesEstabilization() {
            const estabi = await AsyncStorange.getItem(ESTABILIZATION_VIDEO);
            if (estabi) {
                dispatch(estabilidadeCam(JSON.parse(estabi)))
                
            }
    
        }
        //incia com o valor salvo no asyncStorage
        async function ajustesCamera() {
            const storageResolution = await AsyncStorange.getItem(RESOLUTION);

            if (storageResolution) {
                dispatch(resolutionCam(storageResolution));

            }
        }
        ajustesCamera()
        dicasSalvas()
        ajustesEstabilization()
    }, [])


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
                        onValueChange={(e) => estabilization(dispatch(estabilidadeCam(e)))}
                        value={estabilidadeCamera}
                    />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text}>Mostrar dicas de Video</Text>
                    <Switch
                        style={{ marginLeft: '25%', marginTop: '2%' }}
                        onValueChange={(e) => dicasVideo(dispatch(dicasVideosStatus(e)))}
                        value={dicasVideos}
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