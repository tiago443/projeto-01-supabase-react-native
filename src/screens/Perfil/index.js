import { useEffect, useState } from 'react'

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import { supabase } from '../../services/supabase'

import { styles } from '../../styles/styles'

export default function Perfil({ navigation }) {
  const [email, setEmail] = useState('')

  useEffect(() => {
    buscarUsuario()
  }, [])

  async function buscarUsuario() {
    const user =
      (await supabase.auth.getUser()).data.user

    setEmail(user?.email || '')
  }

  async function sair() {
    await supabase.auth.signOut()

    navigation.replace('Login')
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#fff',
          padding: 30,
          borderRadius: 20,
          alignItems: 'center'
        }}
      >
        <Text
          style={{
            fontSize: 70
          }}
        >
          🎮
        </Text>

        <Text
          style={{
            fontSize: 18,
            marginTop: 10,
            color: '#334155'
          }}
        >
          Jogador
        </Text>

        <Text
          style={{
            marginTop: 10,
            color: '#64748b'
          }}
        >
          {email}
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={sair}
        >
          <Text style={styles.textoBotao}>
            Sair
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}