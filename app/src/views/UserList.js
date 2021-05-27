import React from 'react'
import {Text, View, FlatList, Alert} from 'react-native'
import users from '../data/users'
import {ListItem, Avatar, Button, Icon} from 'react-native-elements'

export default props => {

    function confirmUserDeletion(user){
        Alert.alert('Excluir Usuário', 'Deseja realmente Excluir o Usuário?', [
            {
                text:'Sim',
                onPress(){
                    console.warn('O Usuário: ' + user.name + ' foi deletado.')
                }
            },
            {
                text:'Não'
            }
        ])
    }

    function getActions(user){
        return(
            <>
            <Button 
                onPress={()=> props.navigation.navigate('UserForm', user)}
                type="clear"
                icon={<Icon name="edit" size={25} color="blue"></Icon>}
            />
            <Button 
                onPress={()=> confirmUserDeletion(user)}
                type="delete"
                icon={<Icon name="delete" size={25} color="red"></Icon>}
            />
            </>
        )
    }


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
                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
            {getActions(user)}
            </ListItem>
        )
    }

    return(
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}      
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}