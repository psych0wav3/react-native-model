import React from 'react'
import Card from './Card'
import { StyleSheet, View } from 'react-native'
import gixLogistica from '../assets/gixLogistica.png'
import library from '../assets/library.png'
import ead from '../assets/ead.png'
import portal from '../assets/portal.png'
import contact from '../assets/contact.png'
import setting from '../assets/settings.png'

const Logistics = () => {
  return(
    
    <View style={styles.view}>
      <Card style={styles.card} image={gixLogistica} route="EPED Logística" height='28%' />
      <Card style={styles.card} image={ead} link="https://conibase.elore.com.br" height='28%' />
      <Card style={styles.card} image={library} route="Biblioteca Conibase" height='28%' />
      <Card style={styles.card} image={contact} route="Contatos Conibase" height='28%' />
      <Card style={styles.card} image={portal} route="Portal Milvus" height='28%' />
      <Card  image={setting} route="Configurações" height='28%'  />
    </View>
  )
}

const styles = StyleSheet.create({
  view:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    flexWrap:'wrap',
    backgroundColor:'white',
    height:'100%'
  },
  scroll:{
    
  }
})

export default Logistics