import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import {Picker} from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/FontAwesome5'  //user-lock. user, id-card,key, check



const Register = () => {

    const styles = StyleSheet.create({
        title:{
            fontFamily:'Poppins-Light',
            color: "#B11117",
            fontSize:40
        },
        formContent:{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
        },
        container:{
            marginTop:'5%',
            alignItems:'center',
            justifyContent:'center',
        },
        textInput:{
            width:'70%',
            margin:'2%',
            borderWidth:2,
            borderRadius:30,
            borderColor:"#B11117",
            fontFamily:'Poppins-Light',
            textAlign:'center',
        },
        picker:{
            marginTop:'10%',
            justifyContent:'center',
            borderWidth:2,
            borderRadius:30,
            borderColor:'#B11117',
            width:'60%',
            marginLeft:'7%',
        }
    })

    const [picker, setPicker] = useState()


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Novo usuário</Text>

            <View style={styles.picker}>
            <Picker 
                    selectedValue={picker}
                    onValueChange={({itemValue, itemIndex}) => setPicker(itemValue)}
                    style={{color:'#B11117'}}
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
                <Icon name="id-card" color="#26247b" size={30} />
                <TextInput placeholderTextColor="#B11117" style={styles.textInput} placeholder="Nome Completo"></TextInput>
            </View>
            <View style={styles.formContent}>
                <Icon name="user" color="#26247b" size={30} />
            <TextInput placeholderTextColor="#B11117" style={styles.textInput} placeholder="Usuário"></TextInput>
            </View>
            
            <View style={styles.formContent}>
                <Icon name="unlock" color="#26247b" size={30} />
                <TextInput placeholderTextColor="#B11117" secureTextEntry style={styles.textInput} placeholder="Digite uma Senha"></TextInput>
            </View>
            <View style={styles.formContent}>
                <Icon name="unlock" color="#26247b" size={30} />
                <TextInput placeholderTextColor="#B11117" secureTextEntry style={styles.textInput} placeholder="Confirme a Senha"></TextInput>
            </View>
            
            
            <TouchableOpacity style={styles.formContent}>
                <Icon name="check" color="#26247b" size={30} />
                <Text>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Register