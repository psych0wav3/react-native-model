import React from 'react'
import Card from './Card'
import { StyleSheet, View } from 'react-native'
import gixCompras from '../assets/gixCompras.png'
import library from '../assets/library.png'
import ead from '../assets/ead.png'
import portal from '../assets/portal.png'
import contact from '../assets/contact.png'
import setting from '../assets/settings.png'


const Shopping = () => {
  return(
    
    <View style={styles.view}>
      <Card style={styles.card} image={gixCompras} route="EPED Compras" height='28%' />
      <Card style={styles.card} image={ead} link="https://conibase.elore.com.br" height='28%' />
      <Card style={styles.card} image={library} route="Biblioteca Conibase" height='28%' />
      <Card style={styles.card} image={contact} route="Contatos Conibase" height='28%' />
      <Card style={styles.card} image={portal} route="Portal Milvus" height='28%' />
      <Card  image={setting} route="Configurações" height='28%' />
    </View>
  )
}

const styles = StyleSheet.create({
  card:{
    height:'30%'
  },
  view:{
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row',
    flexWrap:'wrap',
    backgroundColor:'white',
    height:'100%'
  },
  scroll:{
    
  }
})

export default Shopping