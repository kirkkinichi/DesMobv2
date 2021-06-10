import React, { useContext } from 'react'
import { View, FlatList, Alert} from 'react-native'
import {ListItem, Avatar, Button, Icon} from 'react-native-elements'
import UsersContext from '../context/UsersContext'

export default props => {

    const {state, dispatch} = useContext(UsersContext)

    function confirmUserDeletion(user){
        Alert.alert('Excluir Funcionário', 'Deseja realmente Excluir o Funcionário?', [
            {
                text:'Sim',
                onPress(){
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                    console.warn('O Funcionário: ' + user.name + ' foi deletado.')
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
                <ListItem.Subtitle>{user.estado} - {user.cidade}</ListItem.Subtitle>
                <ListItem.Subtitle>{user.profissao}</ListItem.Subtitle>
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
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}