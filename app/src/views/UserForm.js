import React, { useState } from 'react'
import {Text, View, TextInput, StyleSheet, Button} from 'react-native'

export default ({route, navigation}) => {

    const [user, setUser] = useState(route.params ? route.params: {})

    return (
        <View style={style.form}>
            <Text>Nome completo:</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe o Nome completo"
                value={user.name}
            />
            <Text>Email:</Text>
            <TextInput
                style={style.input}
                onChangeText={email => setUser({...user, email})}
                placeholder="Informe o Email"
                value={user.email}
            />
            <Text>Url para imagem de perfil:</Text>
            <TextInput
                style={style.input}
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder="Informe a Url da imagem"
                value={user.avatarUrl}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    navigation.goBack()
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