import React, { useState } from 'react'
import {Text, View, TextInput} from 'react-native'

export default ({route, navigation}) => {

    const [user, setUser] = useState(route.params ? route.params: {})

    return (
        <View>
            <Text>Nome: </Text>
            <TextInput
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe o Nome"
                value={user.name}
            />
        </View>
        
    )
}