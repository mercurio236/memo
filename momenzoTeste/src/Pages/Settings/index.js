import React, { useState } from 'react'
import { Picker as RNPickerSelect } from '@react-native-picker/picker';
import { PickerView } from './styles';
import { View, Text, SafeAreaView, StyleSheet, Switch } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Settings() {
    const [qualidade, setQualidade] = useState();
    const [estabilidade, setEstabilidade] = useState(false)
    const [dicas, setDicas] = useState(false)

    const estabili = () => setEstabilidade(previousState => !previousState)
    const dicasVideo = () => setDicas(previousState => !previousState)

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['#0BFFE3', '#557EE7', '#9B05EB']} start={{ x: -2, y: 0 }} end={{ x: 1.4, y: 1 }} style={{ flex: 1 }}>
            <View style={styles.body}>
                <Text style={styles.text}>Qualidade do Video</Text>
                <PickerView>
                    <RNPickerSelect
                        style={{
                            width: '100%'
                        }}
                        selectedValue={qualidade}
                        onValueChange={(valor) => setQualidade(valor)}
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
            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    text: {
        color: '#FFF',
        margin: 10,
        fontSize: 20
    },
    body: {
        marginTop: '5%',
        paddingLeft: '3%'
    },
    picker: {
        backgroundColor: '#FFF',
        width: '17%',
        height: '20%',
        margin: 20,
        justifyContent: 'center',
        marginTop: '5%',
        borderRadius: 6
    }
})