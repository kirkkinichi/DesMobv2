import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack' 
import UserList from './views/UserList'
import UserForm from './views/UserForm'
import Index from './views/Index'
import Register from './views/Register'
import {Button, Icon} from 'react-native-elements'
import { UsersProvider } from './context/UsersContext'


const Stack = createStackNavigator()

const screenOptions = {
    headerStyle: {
        backgroundColor: '#181818'
    },
    headerTintColor: '#FFF'
}

export default props => {
    return (
        <UsersProvider>
            <NavigationContainer independent={true}>
                <Stack.Navigator initialRouteName="Index" screenOptions={screenOptions}>
                    <Stack.Screen name="UserList" component={UserList}
                    options={ ({navigation}) => {
                        return {
                            title: "Lista de Usuários",
                            headerRight: () => (
                                <Button
                                    onPress={ () => navigation.navigate("UserForm")} 
                                    type="clear"
                                    icon = {<Icon name="add" size={25} color="white"/>}
                                />
                            )
                        }
                    }}
                    />
                    <Stack.Screen name="UserForm" component={UserForm}
                    options={ ({navigation}) => {
                        return {
                            title: "Formulário de Usuário"
                        }
                    }}
                    />   
                    <Stack.Screen name="Index" component={Index}
                    options={ ({navigation}) => {
                        return {
                            title: "Página Inicial"
                        }
                    }}
                    />   
                    <Stack.Screen name="Register" component={Register}
                    options={ ({navigation}) => {
                        return {
                            title: "Crie uma Conta"
                        }
                    }}
                    />               
                </Stack.Navigator>
            </NavigationContainer>              
        </UsersProvider>
    )
}