import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './View/login'
import Main from './View/main'
import Contact from './View/contact'
import Library from './View/library'
import Milvus from './View/milvus'
import EpedLog from './View/epedLog'
import EpedCompras from './View/epedCompras'
import Settings from './View/settings'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
            headerShown: false,
            headerStyle:{
              backgroundColor: 'rgb(168,5,18)'
            },
            headerTintColor: '#fff',
            headerTitleStyle:{
              fontWeight: 'bold',
            }
          }} name="Login" component={Login} 
        />
        
        <Stack.Screen options={{
            headerShown: false,
            headerStyle:{
              backgroundColor: 'rgb(168,5,18)'
            },
            headerTintColor: '#fff',
            headerTitleStyle:{
              fontWeight: 'bold',
            }
          }} name="Principal" component={Main} 
        />

        <Stack.Screen options={{
            headerStyle:{
              backgroundColor: 'rgb(168,5,18)'
            },
            headerTintColor: '#fff',
            headerTitleStyle:{
              fontWeight: 'bold',
            }
          }} name="Contatos Conibase" component={Contact} 
        />

        <Stack.Screen options={{
            headerStyle:{
              backgroundColor: 'rgb(168,5,18)'
            },
            headerTintColor: '#fff',
            headerTitleStyle:{
              fontWeight: 'bold',
            }
          }} name="Biblioteca Conibase" component={Library} 
        />

        <Stack.Screen options={{
            headerStyle:{
              backgroundColor: 'rgb(168,5,18)'
            },
            headerTintColor: '#fff',
            headerTitleStyle:{
              fontWeight: 'bold',
            }
          }} name="Portal Milvus" component={Milvus} 
        />

        <Stack.Screen options={{
          headerShown: false,
            headerStyle:{
              backgroundColor: '#255892'
            },
            headerTintColor: '#fff',
            headerTitleStyle:{
              fontWeight: 'bold',
            }
          }} name="EPED Logística" component={EpedLog} 
        />

        <Stack.Screen options={{
          headerShown: false,
            headerStyle:{
              backgroundColor: '#255892'
            },
            headerTintColor: '#fff',
            headerTitleStyle:{
              fontWeight: 'bold',
            }
          }} name="EPED Compras" component={EpedCompras} 
        />
        <Stack.Screen options={{
          headerShown: false,
            headerStyle:{
              backgroundColor: '#255892'
            },
            headerTintColor: '#fff',
            headerTitleStyle:{
              fontWeight: 'bold',
            }
          }} name="Configurações" component={Settings} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;