import React,{useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../../Components/Header'
import Modal from '../Modal'

function Home() {
    const [modal, setModal] = useState(false)
    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.body}>
                <Text style={{color:'#FFF', fontSize:30}}>Nenhum projeto encontrado</Text>
            </View>
            <TouchableOpacity style={styles.btnAdd} onPress={() => setModal(true) }>
                <Text style={{fontSize:40}}>+</Text>
            </TouchableOpacity>
            <Modal show={modal} close={() => setModal(false)}/>
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        
    },
    body:{
        color:"#FFF",
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        marginTop:'60%'
    },
    btnAdd:{
        backgroundColor:'#FFF',
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
        marginEnd:'70%',
        marginLeft:'79%',
        width:'13%',
        height:'7%',
        borderRadius:200,
        marginTop:'100%'
    }

})