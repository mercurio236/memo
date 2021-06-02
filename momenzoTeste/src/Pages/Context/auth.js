import React,{useState, createContext, useEffect} from 'react';
import AsyncStorange from '@react-native-async-storage/async-storage';
import firebase from '../Services/firebaseConnection';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {//mantem o usuario logado
        async function loadStorange(){
            const storangeUser = await AsyncStorange.getItem('Auth_user');

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
        await AsyncStorange.setItem('Auth_user', JSON.stringify(data));
    }

    async function signOut(){
        await firebase.auth().signOut();
        await AsyncStorange.removeItem('Auth_user')
        .then(() =>{
            setUser(null);
        })
    }

    //cadastrar usuario
    async function cadastro(email, password, nome) {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).set({
                    saldo: 0,
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
        <AuthContext.Provider value={{ signed: !!user, user, cadastro, logar, signOut, loading }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;