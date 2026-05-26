import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/Home'
import Cadastro from '../screens/Cadastro'
import Perfil from '../screens/Perfil'

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ef4444'
        },

        headerTintColor: '#fff',

        tabBarStyle: {
          backgroundColor: '#fff',
          height: 60
        },

        tabBarActiveTintColor: '#ef4444',

        tabBarInactiveTintColor: '#64748b'
      }}
    >
      <Tab.Screen
        name="Jogos"
        component={Home}
      />

      <Tab.Screen
        name="Adicionar"
        component={Cadastro}
      />

      <Tab.Screen
        name="Perfil"
        component={Perfil}
      />
    </Tab.Navigator>
  )
}