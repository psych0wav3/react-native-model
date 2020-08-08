import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, StatusBar, FlatList, View, TouchableOpacity} from 'react-native'
import api from '../services/api'


const App = () => {
  
  const [projects, setProject] = useState([])

  useEffect(() => {
    try{
      api.get('/repositories').then(response => setProject(response.data))
    }catch{}
  }, [])
  

    return(
      <View style={styles.constainer}>
				<StatusBar barStyle="light-content" backgroundColor="#335971" />
        <FlatList
          
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({item}) => (
            <View style={styles.list}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.title}>{item.url}</Text>
          <Text style={styles.title}>{item.techs}</Text>
          <Text style={styles.title}>{item.likes} Curtidas</Text>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Curtir</Text></TouchableOpacity>
          </View>
          )}
        />
      </View>
    )

}


const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: "#335971",
        
    },
    title:{
        color: '#335971',
        fontSize:20,
        margin: 10,
    },
    list:{
      padding: 10,
      backgroundColor:'#F1FAEE',
      margin:20,
      borderRadius:10,
    },
    button:{
      justifyContent:'center',
      alignItems:'center',
      borderRadius: 20,
      backgroundColor: '#335971',
      padding: 5,
    },
    buttonText:{
      fontSize: 30,
      color:'#F1FAEE',
      fontWeight: 'bold'
    }
})
export default App