import React, { useState } from 'react'
import { TouchableHighlight,Image, StyleSheet, View, Linking } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Card = ({image, route, link, height}) => {

  const styles = StyleSheet.create({
    view:{
      width:'45%',
      justifyContent:'space-around',
      alignItems:'center'
    },
    touch:{
      flexDirection:'column',
      margin:'2%',
      width:"100%",
      height:height,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'white',
      borderRadius:30,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
    },
    img:{
      width:'100%',
      resizeMode:'center'
    }
  })
  
  var url = link ? true : false
  
  const navigation = useNavigation()
  
  const Route = () => {
    return(
      <View style={styles.view}>
        <TouchableHighlight style={styles.touch} onPress={() => navigation.navigate(route)}>
     
        <Image source={image} style={styles.img} />
      
      </TouchableHighlight>
    </View>
    )
  }

  const Link = () => {
    return(
      <View style={styles.view}>
        <TouchableHighlight style={styles.touch} onPress={() => Linking.openURL(link)}>
        <Image source={image} style={styles.img} />
      </TouchableHighlight>
    </View>
    )
  }


  return !url ? <Route /> : <Link />
  
}



export default Card