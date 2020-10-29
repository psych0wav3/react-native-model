import React from 'react'
import { WebView } from 'react-native-webview'

const Logistic = () => {
    return(
        <WebView source={{uri: "http://10.1.1.159:30402/gix-logistica/eped"}} />
        
    )
}

export default Logistic