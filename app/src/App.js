import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack' 
import UserList from './views/UserList'
import UserForm from './views/UserForm'
import {Button, Icon} from 'react-native-elements'


const Stack = createStackNavigator()

const screenOptions = {
    headerStyle: {
        backgroundColor: '#181818'
    },
    headerTintColor: '#FFF'
}

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="UserList" screenOptions={screenOptions}>
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
                <Stack.Screen name="UserForm" component={UserForm}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}