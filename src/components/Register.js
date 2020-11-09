import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import {Picker} from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/FontAwesome5'  //user-lock. user, id-card,key, check
import api from '../../services/api'
import AsyncStorage from '@react-native-community/async-storage';


const Register = () => {

    const [selectedValue, setSelectedValue] = useState("java");
    const [name, setName] = useState()
    const [user, setUser] = useState()
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
        picker:{
            marginTop:'10%',
            justifyContent:'center',
            width:'80%',
            marginLeft:'0%',
            borderWidth:2,
            borderRadius:30,
            borderColor:'#B11117',
            padding:0
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

    

    async function handleRegister(){
        if(passwd != passwdConfirm){
            return Alert.alert('Senhas', 'Senhas não conferem! \nFavor digite uma senhas compativel.')
        }
        if(name == '' || user == '' || passwd == '' || passwdConfirm == ''){
            return Alert.alert("Campos vazios", "Parece que você esqueceu algum campo vazio! \n favor verificar e tentar novamente")
        }

        var token = await AsyncStorage.getItem('jwt')
        const data = {name:name, username:user, passwd:passwd, access:selectedValue, token:token}

        try{
            const response = await api.post('/create', data, {headers:{'Content-Type':'application/json'}})
            setResponseOK(true)
            setResponseMsg('Dados cadastrados com sucesso!')
            setResponseColor('#50FA7B')
            setName('')
            setUser('')
            setPasswd('')
            setPasswdConfirm('')
        }catch(err){
            setResponseOK(true)
            setResponseMsg("Usuario ja cadastrado!")
            setResponseColor('#e63946')
            setName('')
            setUser('')
            setPasswd('')
            setPasswdConfirm('')
        }

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Novo usuário</Text>

            <View style={styles.picker}>
            <Picker
                selectedValue={selectedValue}
                style={{ color:'#B11117' }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Administrador" value="admin" />        
                    <Picker.Item label="Departamento Pessoal" value="dp" />        
                    <Picker.Item label="compras" value="compras" />        
                    <Picker.Item label="Logistica" value="logistica" />        
                    <Picker.Item label="Vendas" value="vendas" />        
                    <Picker.Item label="Controladoria" value="controladoria" />        
                    <Picker.Item label="Financeiro" value="financeiro" />        
                    <Picker.Item label="Gestão de Pessoas" value="rh" /> 
            </Picker>
            </View>
            <View style={styles.formContent}>
                <Icon name="id-card" style={{marginLeft:"3%"}} color="#26247b" size={20} />
                <TextInput 
                    value={name}
                    placeholderTextColor="#B11117" 
                    onChangeText={text => setName(text)} 
                    style={styles.textInput} 
                    placeholder="Nome Completo"></TextInput>
            </View>
            <View style={styles.formContent}>
                <Icon style={{marginLeft:"3%"}} name="user" color="#26247b" size={20} />
            <TextInput 
                value={user}
                placeholderTextColor="#B11117"
                onChangeText={text => setUser(text.toLowerCase())} 
                style={styles.textInput} 
                placeholder="Usuário"></TextInput>
            </View>
            
            <View style={styles.formContent}>
                <Icon style={{marginLeft:"3%"}} name="unlock" color="#26247b" size={20} />
                <TextInput 
                    value={passwd}
                    placeholderTextColor="#B11117"
                    onChangeText={text => setPasswd(text)} 
                    secureTextEntry 
                    style={styles.textInput} 
                    placeholder="Digite uma Senha"></TextInput>
            </View>
            <View style={styles.formContent}>
                <Icon style={{marginLeft:"3%"}} name="unlock" color="#26247b" size={20} />
                <TextInput 
                    value={passwdConfirm}
                    placeholderTextColor="#B11117" 
                    secureTextEntry
                    onChangeText={text => setPasswdConfirm(text)} 
                    style={styles.textInput} 
                    placeholder="Confirme a Senha"></TextInput>
            </View>
            
            
            <TouchableOpacity style={styles.btn} onPress={handleRegister}>
                <Icon style={{marginLeft:"0%"}} name="check" color="#fff" size={20} />
            <Text style={{color:"#fff", fontFamily:"Poppins-Light", marginLeft:"5%", fontSize:20}}>Cadastrar</Text>
            </TouchableOpacity>
    {responseOK && <Text onPress={() => setResponseOK(false)} style={styles.alertOk}>{responseMsg}</Text>}
        </View>
    )
}

export default Register