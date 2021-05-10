import React, { useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


import Home from '../Home';
import Settings from '../Settings';
import Videos from '../Videos';
import Cam from '../Camera';
import CameraPro from '../CameraPro';
import InfoUser from '../InfoUser';




function AppRouters() {
    return (
        <Stack.Navigator initialRouteName="Cad">
            <Stack.Screen name="Rota" component={RouterSecundaria} options={{ headerShown: false }} />
            <Stack.Screen name="Camera" component={Cam} options={{ headerShown: false }} />
            <Stack.Screen name="CameraPro" component={CameraPro} options={{ headerShown: false }} />
           
            {/* Cadastro inicial de imoveis */}
            <Stack.Screen name="Cad" component={Cadastro} options={{ headerShown: false }} />
            <Stack.Screen name="Project" component={Project} options={{ headerShown: false }}/>
            <Stack.Screen name="Localization" component={Localization} options={{ headerShown: false }}/>
            <Stack.Screen name="Price" component={Price} options={{ headerShown: false }}/>
            <Stack.Screen name="Space" component={Space} options={{ headerShown: false }}/>
            <Stack.Screen name="Land" component={Land} options={{ headerShown: false }}/>
            <Stack.Screen name="Parking" component={Parking} options={{ headerShown: false }}/>
            <Stack.Screen name="Restroon" component={Restroon} options={{ headerShown: false }}/>
            <Stack.Screen name="Badrooms" component={BadroomsLocal} options={{ headerShown: false }}/>
            <Stack.Screen name="Ref" component={Ref} options={{ headerShown: false }}/>
            <Stack.Screen name="AllSet" component={AllSet} options={{ headerShown: false }}/>

        </Stack.Navigator>
    )
}



function RouterSecundaria() {
    return (
        <Drawer.Navigator initialRouteName="Projects"
            drawerStyle={{
                backgroundColor: '#FFF',
            }}

            drawerContentOptions={{
                labelStyle: {
                    fontWeight: 'bold'
                },
                activeTintColor: '#FFF',
                activeBackgroundColor: '#00D58B',
                inactiveBackgroundColor: '#025F3F',
                inactiveTintColor: '#FFF',
                itemStyle: {
                    marginVertical: 5,

                },
            }}>
            <Drawer.Screen name="Projects" component={Home} options={{ headerShown: true, headerTintColor: '#FFF', headerStyle: { backgroundColor: '#00D58B' } }} />
            <Drawer.Screen name="Videos" component={Videos} options={{ headerShown: true, headerTintColor: '#FFF', headerStyle: { backgroundColor: '#00D58B' } }} />
            <Drawer.Screen name="Setting" component={Settings} options={{ headerShown: true, headerTintColor: '#FFF', headerStyle: { backgroundColor: '#00D58B' } }} />
            <Drawer.Screen name="Conta" component={InfoUser} options={{ headerShown: true, headerTintColor: '#FFF', headerStyle: { backgroundColor: '#00D58B' } }} />
        </Drawer.Navigator>
    )
}


/* Multi telas */

const HeaderTop = ({cancelar, pular}) => {
   
    return (
        <View style={styles.headerModal}>
            <View style={styles.btnPro}>
                <TouchableOpacity onPress={cancelar}>
                    <Text style={styles.textModal}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={pular}>
                    <Text style={styles.textModal}>Pular</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function Cadastro({ navigation }) {
    



    
    return (
        <View>
            <HeaderTop pular={() => navigation.navigate('Camera')} cancelar={() => navigation.navigate('Rota')}/>

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
                <TouchableOpacity style={styles.btnProfissional} onPress={() => navigation.navigate('Camera')}>
                    <Text>Pro</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

function Project({ navigation }) {
    return (

        <View>
            <HeaderTop pular={() => navigation.navigate('Camera')} cancelar={() => navigation.navigate('Rota')}/>

            <View style={styles.container}>
                <Text style={styles.textProject}>Nome do seu Projeto</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Projeto Titulo"
                />

                <View style={styles.btnNext}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.push('Localization')} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Próxima tela</Text>
                    </TouchableOpacity>
                    <Text style={styles.textBtn}>Tela 1/9</Text>
                </View>
            </View>
        </View>


    )
}

function Localization({ navigation }) {
    return (
        <View>
            <HeaderTop pular={() => navigation.navigate('Camera')} cancelar={() => navigation.navigate('Rota')}/>
            <View style={styles.container}>
                <Text style={styles.textProject}>Localização da Propriedade</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite a Localização"
                />
                <View style={styles.btnNext}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.push('Price')} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Próxima tela</Text>
                    </TouchableOpacity>
                    <Text style={styles.textBtn}>Tela 2/9</Text>
                </View>
            </View>
        </View>

    )
}

function Price({ navigation }) {
    return (
        <View>
            <HeaderTop pular={() => navigation.navigate('Camera')} cancelar={() => navigation.navigate('Rota')}/>
            <View style={styles.container}>
                <Text style={styles.textProject}>Preço da Propriedade</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o Preço"
                />

                <View style={styles.btnNext}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.push('Space')} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Próxima tela</Text>
                    </TouchableOpacity>
                    <Text style={styles.textBtn}>Tela 3/9</Text>
                </View>
            </View>
        </View>

    )
}

function Space({ navigation }) {
    return (
        <View>
            <HeaderTop pular={() => navigation.navigate('Camera')} cancelar={() => navigation.navigate('Rota')}/>
            <View style={styles.container}>
                <Text style={styles.textProject}>Tamanho do Espaço Interior</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o Espaço"
                />

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

function Land({ navigation }) {
    return (
        <View >
            <HeaderTop pular={() => navigation.navigate('Camera')} cancelar={() => navigation.navigate('Rota')}/>
            <View style={styles.container}>
                <Text style={styles.textProject}>Espaço Total da Propriedade</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o Espaço Total"
                />

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



function Parking({ navigation }) {
    return (
        <View>
            <HeaderTop pular={() => navigation.navigate('Camera')} cancelar={() => navigation.navigate('Rota')}/>
            <View style={styles.container}>
                <Text style={styles.textProject}>Vagas de Estacionamento</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite Vagas de Estacionamento"
                />
                <View style={styles.btnNext}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.push('Restroon')} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Próxima tela</Text>
                    </TouchableOpacity>
                    <Text style={styles.textBtn}>Tela 6/9</Text>
                </View>
            </View>
        </View>

    )
}

function Restroon({ navigation }) {
    return (
        <View >
            <HeaderTop pular={() => navigation.navigate('Camera')} cancelar={() => navigation.navigate('Rota')}/>
            <View style={styles.container}>
                <Text style={styles.textProject}>Quantidade de Banheiros</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite a Quantidade de Banheiros"
                />

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

function BadroomsLocal({ navigation }) {
    return (
        <View>
            <HeaderTop pular={() => navigation.navigate('Camera')} cancelar={() => navigation.navigate('Rota')}/>
            <View style={styles.container}>
                <Text style={styles.textProject}>Quantidade de Quartos</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite a Quantidade de Quartos"
                />

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

function Ref({ navigation }) {
    return (
        <View>
            <HeaderTop pular={() => navigation.navigate('Camera')} cancelar={() => navigation.navigate('Rota')}/>
            <View style={styles.container}>
                <Text style={styles.textProject}>Nome da Lista</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o Nome da Lista"
                />
                <View style={styles.btnNext}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.push('AllSet')} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Próxima tela</Text>
                    </TouchableOpacity>
                    <Text style={styles.textBtn}>Tela 9/9</Text>
                </View>
            </View>
        </View>
    )
}

function AllSet({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textProject}>Tudo Certo</Text>
                <Text style={{ textAlign: 'center', fontSize: 20, marginTop: '10%' }}>Após ter preenchido todos os campos do imovél o próximo passo é gravar.</Text>
                <Text style={{ textAlign: 'center', fontSize: 18, }}>Vamos lá?</Text>

            </View>

            <View>
                <View style={styles.btnNext}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.push('Camera')} style={styles.btnsProximo}>
                        <Text style={styles.textBtn}>Iniciar Gravação</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default AppRouters;

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
        backgroundColor: '#00D58B',
        width: '47%',
        height: 250,
        marginEnd: 7,
        borderRadius: 5,
        justifyContent:'center',
        alignItems:'center',
        
    },
    btnProfissional: {
        backgroundColor: '#00D58B',
        height: 250,
        width: '47%',
        borderRadius: 5,
        justifyContent:'center',
        alignItems:'center'

    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '59%',
        
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
        padding: 10,


    },
    btnNext: {
        flexDirection: 'row',
        top: '95%',
    },
    btnsProximo: {
        marginEnd: 80,
    },
    textBtn: {
        fontSize: 17
    },
    headerModal: {
        height: 60,
        borderBottomEndRadius: 7,
    },
    btnPro: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        margin: 18
    },
    textModal: {
        fontSize: 18,
        color: '#00D58B'
    },


})