import React, {useState, useContext} from 'react'
import {Text, View, KeyboardAvoidingView, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import Api from '../Api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native'
import { MainContext } from '../context/MainContext'

export default props => {

    const {dispatch: userDispatch} = useContext(MainContext);
    const navigation = useNavigation();
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        if(emailField != '' && passwordField != ''){
            let json = await Api.signIn(emailField, passwordField);
            if(json.token) {
                await AsyncStorage.setItem('token', json.token);
                userDispatch({
                    type: 'setAvatar',
                    payload: {
                        avatar: json.data.avatar
                    }
                });

                navigation.reset({
                    routes: [{name:'MainTab'}]
                });
            }
            else {
                alert("Um dos campos está incorreto");
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
                    style={{width: 150, height: 150}}
                    source={{uri: 'https://cdn.pixabay.com/photo/2014/04/03/00/41/house-309113_960_720.png'}}
                />
            </View>

            <View style={styles.container}>
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
                <TouchableOpacity 
                    style={styles.btnAcessar}
                    onPress={()=> props.navigation.navigate('Menu')}
                    // onPress={handleSignClick}
                >
                    <Text style={styles.textAcessar}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.btnAcessar}
                    onPress={()=> props.navigation.navigate('Register')}
                >
                    <Text style={styles.textAcessar}>Criar uma conta</Text>
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
    textAcessar: {
        color: '#FFF',
        fontSize: 25
    }
});
    
