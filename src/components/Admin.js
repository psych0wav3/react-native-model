import React from 'react'
import { Image, TouchableHighlight } from 'react-native'
import LinkComponent from './LinkComponent'
import gixCompras from '../assets/gixCompras.png'

const Admin = ({navigation}) => {
  return(
    <>
    <LinkComponent image={gixCompras} url="http://www.google.com.br" />
    <TouchableHighlight onPress={navigation.navigate("EPED Compras")}>
      <Image source={gixCompras} />
    </TouchableHighlight>
    </>
  )
}

export default Admin