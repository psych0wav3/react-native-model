import React from 'react'
import { TouchableHighlight, Image,  } from 'react-native'


const RouteComponent = ({image, route, navigation}) => {
  return(
    <TouchableHighlight onPress={navigation.navigate(route)}>
      <Image source={image} />
    </TouchableHighlight>
  )
}

export default RouteComponent