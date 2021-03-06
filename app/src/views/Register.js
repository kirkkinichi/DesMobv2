import React, {useState, useContext} from 'react'
import {Text, View, KeyboardAvoidingView, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import Api from '../Api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainContext } from '../context/MainContext'
import {useNavigation} from '@react-navigation/native'

export default props => {

    const {dispatch: userDispatch} = useContext(MainContext);
    const navigation = useNavigation();
    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        if(nameField != '' && emailField != '' && passwordField != ''){            
            let res = await Api.signUp(nameField, emailField, passwordField);
            if(res.token){
                await AsyncStorage.setItem('token', res.token);
                userDispatch({
                    type: 'setAvatar',
                    payload: {
                        avatar: res.data.avatar
                    }
                });                

                navigation.reset({
                    routes: [{name:'MainTab'}]
                });
            }
            else {
                alert("Erro: " + res.error);
            }
        }
        else {
            alert("Preencha todos os campos");
        }
    }

    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.logo}>
                <Image
                    style={{width: 400, height: 200}}
                    source={{uri: 'https://cdn.pixabay.com/photo/2015/07/20/19/07/hand-853188_960_720.png'}}
                />
            </View>

            <View>
                <Text style={styles.text}>Consultor de Funcionários</Text>
            </View>

            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome"
                    autoCorrect={false}
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                />
                <TextInput
                    label="Email"
                    keyboardType="email-address"
                    style={styles.input}
                    placeholder="Email"
                    autoCorrect={false}
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />
                <TextInput 
                    label="Senha"
                    style={styles.input}
                    placeholder="Senha"
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                />

                <TouchableOpacity style={styles.btnAcessar} onPress={()=> props.navigation.navigate('Index')} onPress={handleSignClick}>
                    <Text style={styles.textAcessar}>Criar Conta</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#FFF'
    },
    logo: {
        flex: 1,
        justifyContent:'center'
    },
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingBottom: 60
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 20,
        width:'90%',
        padding: 10,
        backgroundColor: '#FFF'
    },
    btnAcessar: {
        width:'90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#2b2a2a',
        marginTop: 20,
        borderRadius: 8
    },
    text: {
        color: 'black',
        fontSize: 30
    },
    textAcessar: {
        color: '#FFF',
        fontSize: 20
    }
});