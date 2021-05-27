import React, { useContext, useState } from 'react'
import {Text, View, TextInput, StyleSheet, Button} from 'react-native'
import UsersContext from '../context/UsersContext'

export default ({route, navigation}) => {

    const {dispatch} = useContext(UsersContext)
    const [user, setUser] = useState(route.params ? route.params: {})

    return (
        <View style={style.form}>
            <Text>Nome completo:</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Insira o Nome completo"
                value={user.name}
            />
            <Text>Email:</Text>
            <TextInput
                style={style.input}
                onChangeText={email => setUser({...user, email})}
                placeholder="Informe o Email"
                value={user.email}
            />
            <Text>Senha:</Text>
            <TextInput
                style={style.input}
                onChangeText={password => setUser({...user, password})}
                placeholder="Insira uma Senha"
                value={user.password}
                autoCorrect={false}
                secureTextEntry={true}
            />
            <Text>Url para imagem de perfil:</Text>
            <TextInput
                style={style.input}
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder="Informe a Url da imagem"
                value={user.avatarUrl}
            />
            <Button
                title="Criar"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user
                    })
                    navigation.goBack()
                    console.warn('Usuário cadastrado com sucesso.')
                }}
            />
        </View>        
    )    
}

const style = StyleSheet.create({
    form: {
        padding: 15,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 10,
    }
})