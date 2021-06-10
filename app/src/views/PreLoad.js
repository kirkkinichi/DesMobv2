import React, {useEffect, useContext} from 'react'
import {Text, View, KeyboardAvoidingView, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'
import Api from '../Api'
import { MainContext } from '../context/MainContext'

export default props => {

    const {dispatch: userDispatch} = useContext(MainContext);
    const navigation = useNavigation();

    useEffect(()=> {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token) {
                let res = await Api.checkToken(token);
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
                    navigation.navigate('Index')
                }
            } else {
                navigation.navigate('Index');
            }
        }
        checkToken();
    }, []);

    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.logo}>
                <Image
                    style={{width: 400, height: 200}}
                    source={{uri: 'https://cdn.pixabay.com/photo/2015/07/20/19/07/hand-853188_960_720.png'}}
                />
            </View>

            <View style={styles.container}>
                <Text style={styles.textAcessar}>Consultor de Funcionários</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.textAcessar}>Carregando...</Text>
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
        justifyContent:'center',
        marginTop: 50
    },
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
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
        color: 'black',
        fontSize: 40
    }
});
    
