import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import base64 from 'base-64'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Register from '../components/Register'
import Passwd from '../components/passwd'
import Delete from '../components/delete'

const Settings = ({navigation}) => {

    const[access, setAccess] = useState("")
  

    useEffect(()=>{
      async function parseToken(){
        var token = await AsyncStorage.getItem('jwt')
        token  = token.split(".")
        token = base64.decode(token[1]) 
        token = JSON.parse(token)
        setAccess(token) 
        console.log(access)
      }
       parseToken()
    },[])

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
            name="Senhas" 
            component={Passwd} 
            options={{
                tabBarIcon:({color, size}) => (
                    <Icon name="deleteuser" color="#fff" size={30} />
                )
            }}
            />
        {access.access == "admin" ? (
            <Tab.Screen 
            name="Cadastro" 
            component={Register} 
            options={{
                tabBarIcon:({color, size}) => (
                    <Icon name="adduser" color="#fff" size={30} />
                )
            }}
            />
        ) : <></>}
        
        <Tab.Screen 
            name="Apagar" 
            component={Delete} 
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