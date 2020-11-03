import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Register from '../components/Register'


const Settings = ({navigation}) => {

    const Tab = createBottomTabNavigator()

    return(
        <Tab.Navigator
        
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#fff',
          style:{
              backgroundColor:"#B11117",
              
          }
        }}
      >
        <Tab.Screen 
            name="Cadastro" 
            component={Register} 
            options={{
                tabBarIcon:({color, size}) => (
                    <Icon name="adduser" color="#fff" size={30} />
                )
            }}
            />
        <Tab.Screen 
            name="Senhas" 
            component={Register} 
            options={{
                tabBarIcon:({color, size}) => (
                    <Icon name="deleteuser" color="#fff" size={30} />
                )
            }}
            />
        <Tab.Screen 
            name="Apagar" 
            component={Register} 
            options={{
                tabBarIcon:({color, size}) => (
                    <Icon name="unlock" color="#fff" size={30} />
                )
            }}
            />
      </Tab.Navigator>
    )
}

export default Settings