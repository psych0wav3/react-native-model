import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'  //user-lock. user, id-card,key, check
import api from '../../services/api'
import AsyncStorage from '@react-native-community/async-storage';
import base64 from 'base-64'

const Passwd = () => {

    const [passwd, setPasswd] = useState()
    const [passwdConfirm, setPasswdConfirm] = useState()
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
            marginTop:"6%",
            marginTop:"6%",
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

    async function handlePasswd(){
        if(passwd != passwdConfirm){
            return Alert.alert('Senhas', 'Senhas não conferem! \nFavor digite uma senhas compativel.')
        }
        if(passwd == '' || passwdConfirm == ''){
            return Alert.alert("Campos vazios", "Parece que você esqueceu algum campo vazio! \n favor verificar e tentar novamente")
        }

        var token = await AsyncStorage.getItem('jwt')
        var id  = token.split(".")
        id = base64.decode(id[1]) 
        id = JSON.parse(id)
        id = id.id
        const data = {token:token, id: id, passwd: passwd}
        console.log(data)
        try{
            const response = await api.put('/update', data, {headers:{'Content-Type':'application/json'}})
            setResponseOK(true)
            setResponseMsg('Senha alterada com sucesso!')
            setResponseColor('#50FA7B')
            setPasswd('')
            setPasswdConfirm('')
        }catch(err){
            console.log(err)
            setResponseOK(true)
            setResponseMsg("Problema ao alterar a senha!")
            setResponseColor('#e63946')
            setPasswd('')
            setPasswdConfirm('')
        }

    }
    


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mudar Senha</Text>

            <View style={styles.formContent}>
                <Icon style={{marginLeft:"3%"}} name="unlock" color="#26247b" size={20} />
                <TextInput 
                    placeholderTextColor="#B11117" 
                    secureTextEntry 
                    style={styles.textInput} 
                    placeholder="Digite uma Senha"
                    value={passwd}
                    onChangeText={text => setPasswd(text)}
                ></TextInput>
            </View>
            <View style={styles.formContent}>
                <Icon style={{marginLeft:"3%"}} name="unlock" color="#26247b" size={20} />
                <TextInput 
                    placeholderTextColor="#B11117" 
                    secureTextEntry 
                    style={styles.textInput} 
                    placeholder="Confirme a Senha"
                    value={passwdConfirm}
                    onChangeText={text => setPasswdConfirm(text)}
                ></TextInput>
            </View>
            
            
            <TouchableOpacity style={styles.btn} onPress={handlePasswd}>
                <Icon style={{marginLeft:"0%"}} name="check" color="#fff" size={20} />
                <Text style={{color:"#fff", fontFamily:"Poppins-Light", marginLeft:"5%", fontSize:20}}>Trocar Senha</Text>
            </TouchableOpacity>

            {responseOK && <Text onPress={() => setResponseOK(false)} style={styles.alertOk}>{responseMsg}</Text>}
        </View>
    )
}

export default Passwd