import React from 'react'
import Card from './Card'
import { StyleSheet, View, ScrollView } from 'react-native'
import gixCompras from '../assets/gixCompras.png'
import gixLogistica from '../assets/gixLogistica.png'
import library from '../assets/library.png'
import ead from '../assets/ead.png'
import setting from '../assets/settings.png'
import contact from '../assets/contact.png'
import portal from '../assets/portal.png'

const Admin = () => {
  return(
    <ScrollView contentContainerStyle={styles.scroll}>
    
      <Card  image={gixCompras} route="EPED Compras" height='5%' />
      <Card  image={library} route="Biblioteca Conibase" height='5%' />
      <Card  image={contact} route="Contatos Conibase" height='5%' />
      <Card  image={gixLogistica} route="EPED Logística" height='5%' />
      <Card  image={ead} link="https://conibase.elore.com.br" height='5%' />
      <Card  image={setting} route="Configurações" height='5%'  />
      <Card  image={portal} route="Portal Milvus" height='5%' />
    
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:'white'
  },
  
})

export default Admin