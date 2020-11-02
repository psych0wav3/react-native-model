import React from 'react'
import { WebView } from 'react-native-webview'

const Compras = () => {
    return(
        <WebView source={{uri: "http://10.1.1.159:30403/gix-compras/login"}} />
        
    )
}

export default Compras