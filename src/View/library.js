import React from 'react'
import { WebView } from 'react-native-webview'

const Library = () => {
    return(
        <WebView source={{uri: "https://librarycat.org/lib/Conibase"}} />
        
    )
}

export default Library