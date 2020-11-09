import React,{ useEffect, useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons'
import base64 from 'base-64'
import Admin from '../components/Admin'
import Shopping from '../components/compras'
import Logistics from '../components/logistics'

import { 
  View, 
  Text,
  TouchableOpacity,
  StyleSheet  
} from 'react-native'


export default function Main({navigation}) {

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


  const logout = async () => {
    const destroyToken = await AsyncStorage.removeItem('jwt')
    navigation.navigate('Login')
  }

  return (
    <>
      <View style={styles.header}>
        
        <TouchableOpacity style={styles.touch} onPress={logout}>
          <Icon name="logout" size={40} color="#26247b" />
        </TouchableOpacity>
      </View>
  {access.access == "admin" ? <Admin style={styles.access} /> : access.access == "logistica" ? <Logistics style={styles.access} /> : access.access == "compras" ? <Shopping style={styles.access} /> : <Logistics style={styles.access} /> }
    </>
  )
}

const styles = StyleSheet.create({
  header:{
    padding:.1,
    width:"100%",
    height:"8%",
    backgroundColor:"#FFF",
    justifyContent:"flex-end",
    alignItems:"flex-end",
  },
  touch:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    padding:"2%",
    backgroundColor:'white'
  },
  access:{
    width:"100%",
  },
  welcome:{
    fontSize:40
  }
})

