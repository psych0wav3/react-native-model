import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'  //user-lock. user, id-card,key, check
import api from '../../services/api'
import AsyncStorage from '@react-native-community/async-storage';
import base64 from 'base-64'
import Icons from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'


const Delete = () => {
    const navigation = useNavigation()

    const [confirm, setConfirm] = useState()
    const [responseOK, setResponseOK] = useState()
    const [responseMsg, setResponseMsg] = useState()
    const [responseColor, setResponseColor] = useState()

    const styles = StyleSheet.create({
        title:{
            fontFamily:'Poppins-Light',
            color: "#B11117",
            fontSize:40
        },
        formContent:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-around',
            borderWidth:2,
            borderRadius:40,
            borderColor:'#B11117',
            marginTop:"10%",
            padding:'2%'
        },
        container:{
            marginTop:'5%',
            alignItems:'center',
            justifyContent:'center',
        },
        textInput:{
            width:'70%',
            fontFamily:'Poppins-Light',
            textAlign:'center',
            fontSize:15,
            padding:0,
            color:'#B11117'
        },
        btn:{
            borderWidth:2,
            borderRadius:30,
            borderColor:'#ED1C24',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            width:'80%',
            padding:10,
            marginTop:"8%",
            backgroundColor:"#ED1C24",
            
        },
        alert:{
            fontFamily:'Pippins-Light',
            fontSize:20,
            color:'#26247b',
            padding:"5%",
            marginLeft:'5%'
        },

        alertOk:{
            margin:"5%",
            fontFamily:'Poppins-Light',
            fontSize:20,
            color:'white',
            paddingTop:10,
            paddingBottom:10,
            paddingLeft:40,
            paddingRight:40,
            backgroundColor:responseColor
        }
    })

    async function handleDelete(){

        if(confirm != "sim"){
            return Alert.alert("Erro!", "Você precisa confirmar a exclusão!")
        }

        var token = await AsyncStorage.getItem('jwt')
        console.log(token)
        var id  = token.split(".")
        id = base64.decode(id[1]) 
        id = JSON.parse(id)
        id = id.id
        const data = {token:token}
        console.log(data)
        try{
            const response = await api.delete("/delete",{params:{id:id},data:{token: token}}, {headers:{'Content-Type':'application/json'}})
            console.log(response.data)
            setResponseOK(true)
            setResponseMsg("Conta Excluida, obrigado por usar o app :) \n Você sera redirecionado para tela de login")
            setResponseColor('#50FA7B') 
            const removeJwt = await AsyncStorage.removeItem('jwt')  
            setTimeout(() => {
                navigation.navigate('Login')
            }, 4000)    
        }catch(err){
            console.log(err)
            setResponseOK(true)
            setResponseMsg("Problema ao alterar excluir!")
            setResponseColor('#e63946')
            setConfirm('')
        }

    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Excluir Usuario</Text>

            <Text style={styles.alert}>Caso queira realmente excluir sua conta digite no campos abaixo "sim".</Text>
            <Icons name="alert-triangle" color="#ED1C24" size={50} />
            <Text style={styles.alert}>Mas cuidado ao excluir sua conta e precise dela novamente, tera que ser solicitada ao seu gestor uma nova conta.</Text>
            <View style={styles.formContent}>
                <Icon style={{marginLeft:"3%"}} name="unlock" color="#26247b" size={20} />
                <TextInput 
                    placeholderTextColor="#B11117" 
                    style={styles.textInput} 
                    placeholder="digite 'sim' para excluir"
                    value={confirm}
                    onChangeText={text => setConfirm(text.toLowerCase())}
                ></TextInput>
            </View>
            
            
            <TouchableOpacity style={styles.btn} onPress={handleDelete}>
                <Icon style={{marginLeft:"0%"}} name="check" color="#fff" size={20} />
                <Text style={{color:"#fff", fontFamily:"Poppins-Light", marginLeft:"5%", fontSize:20}}>Excluir</Text>
            </TouchableOpacity>

            {responseOK && <Text onPress={() => setResponseOK(false)} style={styles.alertOk}>{responseMsg}</Text>}
        </View>
    )
}

export default Delete