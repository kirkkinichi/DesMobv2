import React, {useState, useContext} from 'react'
import {Text, View, KeyboardAvoidingView, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import UsersContext from '../context/UsersContext'

export default props => {

    return (
        <KeyboardAvoidingView style={styles.background}>            
            <View>
                <Text style={styles.text}>Procure por um Funcionário / Profissão </Text>
            </View>

            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o nome do funcionário ou sua profissão"
                />
                <TouchableOpacity style={styles.btnAcessar} onPress={()=> props.navigation.navigate('Index')}>
                    <Text style={styles.textAcessar}>Procurar</Text>
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
        fontSize: 30,
        paddingTop: 20
    },
    textAcessar: {
        color: '#FFF',
        fontSize: 20
    }
});