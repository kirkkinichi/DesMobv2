import React, { useState } from 'react'
import {Text, View, TextInput, StyleSheet} from 'react-native'

export default ({route, navigation}) => {

    const [user, setUser] = useState(route.params ? route.params: {})

    return (
        <View style={style.form}>
            <Text>Nome:</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe o Nome"
                value={user.name}
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