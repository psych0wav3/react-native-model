import React from 'react'
import { WebView } from 'react-native-webview'

const Contact = () => {
    return(
        <WebView source={{uri: "http://10.1.1.14:82/#/contatos"}} />
        //http://10.1.1.14:82/#/contatos
    )
}

export default Contact