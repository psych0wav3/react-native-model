import React from 'react'
import { TouchableHighlight, Image, Linking } from 'react-native'


const LinkComponent = ({image, url}) => {
  return(
    <TouchableHighlight onPress={() => Linking.openURL(url)}>
      <Image source={image} />
    </TouchableHighlight>
  )
}

export default LinkComponent