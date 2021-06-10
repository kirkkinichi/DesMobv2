import React, { useContext, useState } from 'react'
import {Text, View, TextInput, StyleSheet, Button, Image, KeyboardAvoidingView} from 'react-native'
import UsersContext from '../context/UsersContext'

export default ({route, navigation}) => {

    const {dispatch} = useContext(UsersContext)
    const [user, setUser] = useState(route.params ? route.params: {})

    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.logo}>
                <Image
                    style={{width: 125, height: 125}}
                    source={{uri: user.avatarUrl}}
                />
            </View>
            
            <View style={styles.container}>
                <Text style={styles.title}>Nome: </Text>
                <Text style={styles.text}>{user.name}</Text>
                <Text style={styles.title}>Email:</Text>
                <Text style={styles.text}>{user.email}</Text>
                <Text style={styles.title}>Profissão:</Text>
                <Text style={styles.text}>{user.profissao}</Text>
                <Text style={styles.title}>Estado:</Text>
                <Text style={styles.text}>{user.estado}</Text>
                <Text style={styles.title}>Cidade:</Text>
                <Text style={styles.text}>{user.cidade}</Text>
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
        width: '100%',
        padding: 20
    },
    textAcessar: {
        color: '#FFF',
        fontSize: 15,
        padding: 10
    },
    text: {
        color: '#2b2a2a',
        fontSize: 15,
        paddingBottom: 10
    },
    title: {
        color: '#2b2a2a',
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: 5
    }
})