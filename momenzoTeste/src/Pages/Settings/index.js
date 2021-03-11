import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { View, Text, SafeAreaView, StyleSheet, Switch } from 'react-native';

export default function Settings() {
    const [qualidade, setQualidade] = useState();
    const [estabilidade, setEstabilidade] = useState(false)
    const [dicas, setDicas] = useState(false)

    const estabili = () => setEstabilidade(previousState => !previousState)
    const dicasVideo = () => setDicas(previousState => !previousState)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.text}>Qualidade do Video</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={qualidade}
                    onValueChange={(itemValue, itemIndex) =>
                        setQualidade(itemValue)
                    }>
                    <Picker.Item label="780" value="780" />
                    <Picker.Item label="1080" value="1080" />
                </Picker>

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