import React, {useState, useContext} from 'react'
import {Text, View, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, FlatList} from 'react-native'
import {ListItem, Avatar} from 'react-native-elements'
import UsersContext from '../context/UsersContext'

export default props => {

    const {state, dispatch} = useContext(UsersContext)

    function getUserItem({ item: user }){
        return(
            <ListItem
            key={user.id} 
            bottomDivider 
            onPress={() => props.navigation.navigate('UserForm', user)}
            >
            <Avatar source={{uri: user.avatarUrl}} />
            <ListItem.Content>
                <ListItem.Title>{user.name}</ListItem.Title>
                <ListItem.Subtitle>{user.estado} - {user.cidade}</ListItem.Subtitle>
                <ListItem.Subtitle>{user.profissao}</ListItem.Subtitle>
                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
            </ListItem>
        )
    }        

    return (      
        <View>
            <Text style={styles.title}>Procure por um Funcionário / Profissão </Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o nome do funcionário ou sua profissão"
            />
            <TouchableOpacity style={styles.btnAcessar} onPress={()=> props.navigation.navigate('')}>
                <Text style={styles.textAcessar}>Procurar</Text>
            </TouchableOpacity>

            <FlatList
            keyExtractor={user => user.id.toString()}      
            data={state.users}
            renderItem={getUserItem}
                />
        </View>
    )
}

const styles = StyleSheet.create({  
    
    input: {
        height: 50,
        borderColor: 'gray',
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 20,
        width:'100%',
        padding: 10,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnAcessar: {
        width:'100%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#2b2a2a',
        marginTop: 20,
        marginBottom: 10
    },
    title: {
        color: 'black',
        fontSize: 30,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textAcessar: {
        color: '#FFF',
        fontSize: 20
    }
});