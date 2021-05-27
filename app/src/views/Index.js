import React from 'react'
import {Text, View, KeyboardAvoidingView, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

export default props => {
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
                />
                <TextInput 
                    label="Senha"
                    style={styles.input}
                    placeholder="Senha"
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <TouchableOpacity 
                    style={styles.btnAcessar}
                    onPress={()=> props.navigation.navigate('UserList')}
                >
                    <Text style={styles.textAcessar}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.btnAcessar}
                    
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
    
