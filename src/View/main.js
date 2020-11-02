import React,{ useEffect, useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import base64 from 'base-64'
import Logout from '../assets/logout.png'
import Admin from '../components/Admin'
import { 
  ScrollView, 
  View, 
  TouchableOpacity, 
  Image, 
  Text,
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
          <Image source={Logout} style={styles.logoutImage}></Image>
          <Text style={styles.outText}>Sair</Text>
        </TouchableOpacity>
      </View>
      <Admin style={styles.access} />
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
  logoutImage:{
    height:20,
    width:20,
  },
  touch:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    padding:"2%",
    backgroundColor:'white'
  },
  outText:{
    fontFamily:"Poppins-Regular",
    fontWeight:"600",
    marginLeft:"1%",
    fontSize:16,
    color:"#26247b"
  }, 
  access:{
    width:"100%",
  }
})

