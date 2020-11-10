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
import panda from '../assets/panda.png'
import rh from '../assets/portalRh.png'


const Admin = () => {
  return(
    <View style={styles.view}>
      <Card  image={gixCompras} route="EPED Compras" height='20%' />
      <Card  image={gixLogistica} route="EPED Logística" height='20%' />
      <Card  image={library} route="Biblioteca Conibase" height='20%' />
      <Card  image={contact} route="Contatos Conibase" height='20%' />
      <Card  image={ead} link="https://conibase.elore.com.br" height='20%' />
      <Card  image={portal} route="Portal Milvus" height='20%' />
      <Card  image={panda} route="Panda" height='20%' />
      <Card  image={rh} route="RH" height='20%' />
      <Card  image={setting} route="Configurações" height='20%'  />
    </View>
  )
}

const styles = StyleSheet.create({
  view:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    flexWrap:'wrap',
    backgroundColor:'white',
    height:'100%'
  },
  
})

export default Admin