import React,{ useState, useEffect } from 'react'
import { Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, TextInput, Image, StatusBar } from 'react-native'
import imgLogin from '../assets/login.jpeg'
import logo from '../assets/LogoApp.png'
import api from '../../services/api'
import AsyncStorage from '@react-native-community/async-storage';


const Login = ({ navigation }) => {

    useEffect(() => {
        async function verifyStorage(){
            const verify = await AsyncStorage.getItem('jwt')
            if (verify != null){
                navigation.navigate('Principal')
            }
        }
        verifyStorage()
    },[])

    const [user, setUser] = useState("")
    const [passwd, setPasswd] = useState("")

    async function handleLogin(){
        let data = {username: user, passwd:passwd}
        try{
            const response = await api.post('/login', data)
            await AsyncStorage.setItem('jwt', response.data.token)
            const verify = await AsyncStorage.getItem('jwt')
            if(verify !== null){
                navigation.navigate('Principal')
            }
        }catch(err){
            var error = err.response.data
            alert(`error: ${error.status}`)
            return false
        }
    }
    
    

    return(
        <>
            <StatusBar barStyle="light-content" backgroundColor="rgb(168,5,18)" />
            <ImageBackground source={imgLogin} style={styles.image} blurRadius={2}>
                <Image source={logo} style={styles.logo} />
                <TextInput  
                    style={styles.input} 
                    onChangeText={text => setUser(text.toLowerCase())} 
                    placeholder="Usuário" 
                    placeholderTextColor="white" 
                    textAlign="center" />
                <TextInput  
                    style={styles.input} 
                    onChangeText={text => setPasswd(text.toLowerCase())} 
                    placeholder="Senha" 
                    placeholderTextColor="white" 
                    textAlign="center" 
                    secureTextEntry />
                <TouchableOpacity 
                    style={styles.btn} 
                    onPress={handleLogin}>
                <Text style={styles.btnTxt}>Login</Text>
                </TouchableOpacity>
            </ImageBackground>
        </>
        
    )

}
const styles = StyleSheet.create({
    image:{
        flex: 1,
        width: null,
        height: null,
        alignItems:'center',
        justifyContent: "center"
    },

    logo: {
        alignItems:'center',
        
        resizeMode:"contain",
        width:250,
        height:150
      },
    input:{
        borderRadius:30,
        borderWidth: 1,
        borderColor:"#fff",
        alignItems:'center',
        textTransform: "lowercase",
        marginTop:20,
        fontSize:15,
        fontFamily:"Poppins-Light",
        color:'white',
        width:"70%",
        backgroundColor:'rgba(255,255,255,0.0)'
    },
    btn:{
        borderRadius: 30,
        backgroundColor:"#ED1C24",
        padding:(70,10),
        margin: 20,
        marginBottom:-20,
        width:"70%",
        alignItems: 'center'

    },
    btnTxt:{
        fontFamily: "Poppins-SemiBold",
        color:'white', 
        fontSize: 15
    }
    
    
})

export default Login