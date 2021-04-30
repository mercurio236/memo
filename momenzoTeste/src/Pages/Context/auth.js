import React,{useState, createContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '../Services/firebaseConnection';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {//mantem o usuario logado
        async function loadStorange(){
            const storangeUser = await AsyncStorage.getItem('Auth_user');

            if(storangeUser){
                setUser(JSON.parse(storangeUser));
                setLoading(false);
            }
            setLoading(false);
        }
        loadStorange()
    }, [])

    //funcao para logar usuario
    async function logar(email, password) {
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).once('value')
                    .then((snapshot) => {
                        let data = {
                            uid: uid,
                            nome: snapshot.val().nome,
                            email: value.user.email
                        }
                        setUser(data);
                        storageUser(data);
                    })
            })
            .catch((error) => {
                alert(error)
            })
    }

    //salvar os dados no asyncStorange
    async function storageUser(data) {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    async function signOut(){
        await firebase.auth().signOut();
        await AsyncStorange.clear()
        .then(() =>{
            setUser(null);
        })
    }

    //cadastrar usuario
    async function cadastrar(email, password, nome) {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).set({
                    nome: nome
                })
                    .then(() => {
                        let data = {
                            uid: uid,
                            nome: nome,
                            email: value.user.email
                        }
                        setUser(data);
                        storageUser(data);
                    })

            }).catch((error) => {
                console.log(error)
            })
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, cadastrar, logar, signOut, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

