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
    <ScrollView style={styles.scroll}>
    <View style={styles.view}>
      <Card style={styles.card} image={gixCompras} route="EPED Compras" height='22%' />
      <Card style={styles.card} image={library} route="Biblioteca Conibase" height='22%' />
      <Card style={styles.card} image={contact} route="Contatos Conibase" height='22%' />
      <Card style={styles.card} image={gixLogistica} route="EPED Logística" height='22%' />
      <Card style={styles.card} image={ead} link="https://conibase.elore.com.br" height='22%' />
      <Card style={styles.card} image={setting} route="Configurações" height='22%'  />
      <Card style={styles.card} image={portal} route="Portal Milvus" height='22%' />
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  view:{
    flexDirection:'row',
    flexWrap:'wrap',
    backgroundColor:'white',
  },
  scroll:{
    backgroundColor:'blue',
    height:"100%",
  }
})

export default Admin