import React from 'react'
import Card from './Card'
import { StyleSheet, View } from 'react-native'
import gixCompras from '../assets/gixCompras.png'
import library from '../assets/library.png'
import ead from '../assets/ead.png'
import portal from '../assets/portal.png'
import contact from '../assets/contact.png'
import setting from '../assets/settings.png'
import panda from '../assets/panda.png'
import rh from '../assets/portalRh.png'

const Shopping = () => {
  return(
    
    <View style={styles.view}>
      <Card style={styles.card} image={gixCompras} route="EPED Compras" height='20%' />
      <Card style={styles.card} image={ead} link="https://conibase.elore.com.br" height='20%' />
      <Card style={styles.card} image={library} route="Biblioteca Conibase" height='20%' />
      <Card style={styles.card} image={contact} route="Contatos Conibase" height='20%' />
      <Card style={styles.card} image={portal} route="Portal Milvus" height='20%' />
      <Card  image={panda} route="Panda" height='20%' />
      <Card  image={rh} route="RH" height='20%' />
      <Card  image={setting} route="Configurações" height='20%' />
    </View>
  )
}

const styles = StyleSheet.create({
  card:{
    height:'30%'
  },
  view:{
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'row',
    flexWrap:'wrap',
    backgroundColor:'white',
    height:'100%'
  },
})

export default Shopping