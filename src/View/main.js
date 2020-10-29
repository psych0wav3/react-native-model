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

  const[admin, setAdmin] = useState(false)
  const[compras, setCompras] = useState(false)
  const[controladoria, setControladoria] = useState(false)
  const[dp, setDp] = useState(false)
  const[financeiro, setFinanceiro] = useState(false)
  const[logistica, setLogistica] = useState(false)
  const[rh, setRH] = useState(false)
  const[vendas, setVendas] = useState(false)


   useEffect(()=>{
     async function parseToken(){
       var token = await AsyncStorage.getItem('jwt')
       token  = token.split(".")
       token = base64.decode(token[1]) 
       token = JSON.parse(token)
      
       if(token.access == "admin"){
         setAdmin(true)
        } 
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
      <ScrollView>
        {admin && <Admin navigation={navigation} />}
      </ScrollView>
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
})

