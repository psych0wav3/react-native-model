import React from 'react'
import Card from './Card'
import { StyleSheet, View } from 'react-native'
import gixCompras from '../assets/gixCompras.png'
import gixLogistica from '../assets/gixLogistica.png'
import library from '../assets/library.png'
import ead from '../assets/ead.png'
import portal from '../assets/portal.png'
import contact from '../assets/contact.png'


const Shopping = () => {
  return(
    
    <View style={styles.view}>
      <Card style={styles.card} image={gixCompras} link="https://conibase.elore.com.br" height='45%' />
      <Card style={styles.card} image={library} route="EPED Compras" height='45%' />
      <Card style={styles.card} image={contact} route="EPED Compras" height='45%' />
      <Card style={styles.card} image={ead} route="EPED Compras" height='45%' />
      <Card style={styles.card} image={portal} route="EPED Compras" height='45%' />
    </View>
  )
}

const styles = StyleSheet.create({
  card:{
    height:'30%'
  },
  view:{
    flexDirection:'row',
    flexWrap:'wrap',
    backgroundColor:'white',
    height:'100%'
  },
  scroll:{
    
  }
})

export default Shopping