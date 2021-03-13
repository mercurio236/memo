import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native';

export default function Videos() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.body}>
                    <Text style={styles.text}>Não há videos em sua Galeria</Text>
                </View>
            </ScrollView>
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