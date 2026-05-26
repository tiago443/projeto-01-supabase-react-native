import { useState } from 'react'

import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'

import { supabase } from '../../services/supabase'

import { styles } from '../../styles/styles'

export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  async function entrar() {
    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password: senha
      })

    if (!error) {
      navigation.replace('Tabs')
    }
  }

  async function cadastrar() {
    await supabase.auth.signUp({
      email,
      password: senha
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Biblioteca Gamer
      </Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={entrar}
      >
        <Text style={styles.textoBotao}>
          Entrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={cadastrar}
      >
        <Text style={styles.textoBotao}>
          Cadastrar
        </Text>
      </TouchableOpacity>
    </View>
  )
}