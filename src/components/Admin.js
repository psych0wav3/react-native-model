import React from 'react'
import gixCompras from '../assets/gixCompras.png'
import Card from './Card'
import { StyleSheet, View } from 'react-native'


const Admin = () => {
  return(
    
    <View style={styles.view}>
      <Card style={styles.card} image={gixCompras} link="https://conibase.elore.com.br" />
      <Card style={styles.card} image={gixCompras} route="EPED Compras" />
      <Card style={styles.card} image={gixCompras} route="EPED Compras" />
      <Card style={styles.card} image={gixCompras} route="EPED Compras" />
      <Card style={styles.card} image={gixCompras} route="EPED Compras" />
      <Card style={styles.card} image={gixCompras} route="EPED Compras" />
    </View>
  )
}

const styles = StyleSheet.create({
  card:{

  },
  view:{
    flexDirection:'row',
    flexWrap:'wrap',
    backgroundColor:'white'
  },
  scroll:{
    
  }
})

export default Admin