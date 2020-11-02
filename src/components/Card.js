import React, { useState } from 'react'
import { TouchableHighlight,Image, StyleSheet, View, Linking } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Card = ({image, route, link}) => {
  
  var url = link ? true : false
  
  const navigation = useNavigation()
  
  const Route = () => {
    return(
      <View>
        <TouchableHighlight style={styles.touch} onPress={() => navigation.navigate(route)}>
     
        <Image source={image} style={styles.img} />
      
      </TouchableHighlight>
    </View>
    )
  }

  const Link = () => {
    return(
      <View>
        <TouchableHighlight style={styles.touch} onPress={() => Linking.openURL(link)}>
        <Image source={image} style={styles.img} />
      </TouchableHighlight>
    </View>
    )
  }


  return !url ? <Route /> : <Link />
  
}


const styles = StyleSheet.create({
  touch:{
    marginTop:'20%',
    marginLeft:'4%',
    width:"90%",
    height:'40%',
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
    width:180,
    resizeMode:'center'
  }
})
export default Card