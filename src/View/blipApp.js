import React from 'react'
import { WebView } from 'react-native-webview'

const Blip = () => {
    return(
        <WebView source={{uri: "https://desk.blip.ai/"}} />
        
    )
}

export default Blip