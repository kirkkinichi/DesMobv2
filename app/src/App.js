import 'react-native-gesture-handler';
import React, {useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack' 
import UserList from './views/UserList'
import UserForm from './views/UserForm'
import SignOut from './views/SignOut'
import Procurar from './views/Procurar'
import Index from './views/Index'
import Register from './views/Register'
import Menu from './views/Menu'
import PreLoad from './views/PreLoad'
import {Button, Icon} from 'react-native-elements'
import MainContextProvider from '../src/context/MainContext'
import { UsersProvider } from './context/UsersContext'
import OneSignal from 'react-native-onesignal';


const Stack = createStackNavigator()

const screenOptions = {
    headerStyle: {
        backgroundColor: '#181818'
    },
    headerTintColor: '#FFF'
}

export default props => {

    function onOpened(result){
        console.log('Mensagem: ', result.notification.payload.body);
        console.log('Result: ', result);
    }

    useEffect(()=>{
        OneSignal.init('bba52c2e-1b0e-49d0-bd1b-833aa550c9ba');
        OneSignal.addEventListener('opened', onOpened);

        return() => OneSignal.removeEventListener('opened', onOpened);

    },[]);

    return (
        <MainContextProvider>
        <UsersProvider>
            <NavigationContainer independent={true}>
                <Stack.Navigator initialRouteName="PreLoad" screenOptions={screenOptions}>
                    <Stack.Screen name="UserList" component={UserList}
                    options={ ({navigation}) => {
                        return {
                            title: "Lista de Funcionários",
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
                            title: "Cadastrar um Funcionário"
                        }
                    }}
                    />   
                    <Stack.Screen name="Procurar" component={Procurar}
                    options={ ({navigation}) => {
                        return {
                            title: ""
                        }
                    }}
                    />   
                    <Stack.Screen name="Menu" component={Menu}
                    options={ ({navigation}) => {
                        return {
                            title: "Menu"
                        }
                    }}
                    options={{headerShown: false}}
                    />   
                    <Stack.Screen name="Index" component={Index}
                    options={ ({navigation}) => {
                        return {
                            title: "Página Inicial"
                        }
                    }} 
                    options={{headerShown: false}}
                    />   
                    <Stack.Screen name="Register" component={Register}
                    options={ ({navigation}) => {
                        return {
                            title: "Crie uma Conta"
                        }
                    }}
                    />      
                    <Stack.Screen name="SignOut" component={SignOut} 
                    options={ ({navigation}) => {
                        return {
                            title: "SignOut"
                        }
                    }}
                    />            
                    <Stack.Screen name="PreLoad" component={PreLoad}
                    options={ ({navigation}) => {
                        return {
                            title: "PreLoad"
                        }
                    }}
                    options={{headerShown: false}}
                    />            
                </Stack.Navigator>
            </NavigationContainer>              
        </UsersProvider>
        </MainContextProvider>
    )
}