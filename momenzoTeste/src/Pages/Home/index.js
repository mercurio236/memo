import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import Modal from '../Modal'

function Home({ navigation }) {
    const [modal, setModal] = useState(false)
    return (

        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.body} >
            <ScrollView>
                <Text style={{color:'#FFF', fontSize:20}}>Nenhum projeto encontrado</Text>
            </ScrollView>


                <TouchableOpacity style={styles.btnAdd} onPress={() => setModal(true)}>
                    <Text style={{ fontSize: 40 }}>+</Text>
                </TouchableOpacity>
            </View>
            <Modal show={modal} close={() => setModal(false)} navigation={navigation} />
        </View>



    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    body: {
        color: "#FFF",
        padding: 3,
        margin:10,
        justifyContent:'center',
        flex:1,
        alignItems:'center'
    },
    btnAdd: {
        backgroundColor: '#FFF',
        width: 60,
        height: 60,
        borderRadius: 200,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:'80%'
    }

})