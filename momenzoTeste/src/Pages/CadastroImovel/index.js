import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AuthContext } from '../Context/auth'



import Camera from '../Camera'



function Cadastro({ navigation }) {
    const [modalNewProject, setModalNewProject] = useState(false);
    const { user, signOut } = useContext(AuthContext)

    useEffect(() => {
        setModalNewProject(true)
    }, [])
    return (
        <View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: '4%' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'row', marginTop: '10%', marginBottom: '5%' }}>
                    <Image style={{ width: 50, height: 50, marginEnd: 10 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                    <Text style={{ fontSize: 20 }}>Projeto Nome e logo</Text>
                </View>
                <Text style={{ textAlign: 'center', top: 10, fontSize: 17 }}>Selecione o tipo de Video que voce quer gravar</Text>
            </View>


            <View style={styles.btnsProjects}>
                <TouchableOpacity onPress={() => navigation.push('Project')} style={styles.btnAprendizado}>
                    <Text>Aprendizado</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnProfissional} onPress={() =>  setModalNewProject(false)}>
                    <Text>Pro</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

function Project({navigation}) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textProject}>Nome do seu Projeto</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Projeto Titulo"
                />
            </View>

            <View>
                <View style={styles.btnNext}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>  navigation.push('Localization')} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Próxima tela</Text>
                    </TouchableOpacity>
                    <Text style={styles.textBtn}>Tela 1/9</Text>
                </View>
            </View>
        </View>

    )
}

function Localization({navigation}){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.textProject}>Localização da Propriedade</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite a Localização"
                />
            </View>

            <View>
                <View style={styles.btnNext}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>  navigation.push('Price')} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Próxima tela</Text>
                    </TouchableOpacity>
                    <Text style={styles.textBtn}>Tela 2/9</Text>
                </View>
            </View>
        </View>

    )
}

function Price({navigation}){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.textProject}>Preço da Propriedade</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o Preço"
                />
            </View>

            <View>
                <View style={styles.btnNext}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>  navigation.push('Space')} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Próxima tela</Text>
                    </TouchableOpacity>
                    <Text style={styles.textBtn}>Tela 3/9</Text>
                </View>
            </View>
        </View>

    )
}

function Space({navigation}){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.textProject}>Tamanho do Espaço Interior</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o Espaço"
                />
            </View>

            <View>
                <View style={styles.btnNext}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.push('Land')} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Próxima tela</Text>
                    </TouchableOpacity>
                    <Text style={styles.textBtn}>Tela 4/9</Text>
                </View>
            </View>
        </View>

    )
}

function Land({navigation}){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.textProject}>Espaço Total da Propriedade</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o Espaço Total"
                />
            </View>

            <View>
                <View style={styles.btnNext}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.push('Parking')} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Próxima tela</Text>
                    </TouchableOpacity>
                    <Text style={styles.textBtn}>Tela 5/9</Text>
                </View>
            </View>
        </View>

    )
}



function Parking({navigation}){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.textProject}>Vagas de Estacionamento</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite Vagas de Estacionamento"
                />
            </View>

            <View>
                <View style={styles.btnNext}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>  navigation.push('Restroon')} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Próxima tela</Text>
                    </TouchableOpacity>
                    <Text style={styles.textBtn}>Tela 6/9</Text>
                </View>
            </View>
        </View>

    )
}

function Restroon({navigation}){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.textProject}>Quantidade de Banheiros</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite a Quantidade de Banheiros"
                />
            </View>

            <View>
                <View style={styles.btnNext}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.push('Badrooms')} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Próxima tela</Text>
                    </TouchableOpacity>
                    <Text style={styles.textBtn}>Tela 7/9</Text>
                </View>
            </View>
        </View>

    )
}

function BadroomsLocal({navigation}){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.textProject}>Quantidade de Quartos</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite a Quantidade de Quartos"
                />
            </View>

            <View>
                <View style={styles.btnNext}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.push('Ref')} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Próxima tela</Text>
                    </TouchableOpacity>
                    <Text style={styles.textBtn}>Tela 8/9</Text>
                </View>
            </View>
        </View>

    )
}

function Ref({navigation}){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.textProject}>Nome da Lista</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o Nome da Lista"
                />
            </View>

            <View>
                <View style={styles.btnNext}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>  navigation.push('AllSet')} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Próxima tela</Text>
                    </TouchableOpacity>
                    <Text style={styles.textBtn}>Tela 9/9</Text>
                </View>
            </View>
        </View>
    )
}

function AllSet({navigation}){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.textProject}>Tudo Certo</Text>
                <Text style={{textAlign:'center', fontSize:20}}>Após ter preenchido todos os campos do imovél o próximo passo é gravar.</Text>
                <Text style={{textAlign:'center', fontSize:18}}>Vamos lá?</Text>
                
            </View>

            <View>
                <View style={styles.btnNext}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>  navigation.push('Camera')} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Iniciar Gravação</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View>
    )
}



function CadastroImovel() {

    const Stack = createStackNavigator();

    return (
        <SafeAreaProvider>
            <NavigationContainer independent={true}>
                <Stack.Navigator initialRouteName="Cad" headerMode="none" >
                    <Stack.Screen name="Cad" component={Cadastro}  />
                    <Stack.Screen name="Project" component={Project} />
                    <Stack.Screen name="Localization" component={Localization}  />
                    <Stack.Screen name="Price" component={Price} />
                    <Stack.Screen name="Space" component={Space}  />
                    <Stack.Screen name="Land" component={Land}  />
                    <Stack.Screen name="Parking" component={Parking}  />
                    <Stack.Screen name="Restroon" component={Restroon}  />
                    <Stack.Screen name="Badrooms" component={BadroomsLocal}  />
                    <Stack.Screen name="Ref" component={Ref}  />
                    <Stack.Screen name="AllSet" component={AllSet}  />
                    <Stack.Screen name="Camera" component={Camera}  />

                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>

    )
}

export default CadastroImovel;

const styles = StyleSheet.create({
    textModal: {
        fontSize: 18,
        color: '#9B05EB'
    },
    btnsProjects: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        marginTop: '7%',

    },
    btnAprendizado: {
        backgroundColor: '#6FBAEB',
        width: '47%',
        height: 250,
        marginEnd: 7,
        borderRadius: 5
    },
    btnProfissional: {
        backgroundColor: '#6FBAEB',
        height: 250,
        width: '47%',
        borderRadius: 5

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textProject: {
        fontSize: 23,
        textAlign: 'center',
        marginBottom: 30
    },
    input: {
        backgroundColor: 'rgba(0,0,0,0.10)',
        borderRadius: 5,
        width: 300,
        padding: 10

    },
    btnNext: {
        flexDirection:'row',
        top: 290,
    },
    btnsProximo:{
        marginEnd:80,
    },
    textBtn:{
        fontSize: 17
    }


})