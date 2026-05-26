import { useState } from 'react'

import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Switch
} from 'react-native'

import { supabase } from '../../services/supabase'

import { styles } from '../../styles/styles'

export default function Cadastro() {
  const [nome, setNome] = useState('')
  const [plataforma, setPlataforma] = useState('')
  const [imagem, setImagem] = useState('')
  const [publico, setPublico] = useState(false)

  async function cadastrarJogo() {
    const user =
      (await supabase.auth.getUser()).data.user

    await supabase.from('jogos').insert([
      {
        nome,
        plataforma,
        imagem,
        publico,
        user_id: user?.id
      }
    ])

    setNome('')
    setPlataforma('')
    setImagem('')
    setPublico(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Novo Jogo
      </Text>

      <TextInput
        placeholder="Nome"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        placeholder="Plataforma"
        style={styles.input}
        value={plataforma}
        onChangeText={setPlataforma}
      />

      <TextInput
        placeholder="Imagem URL"
        style={styles.input}
        value={imagem}
        onChangeText={setImagem}
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Text>
          🌍 Público
        </Text>

        <Switch
          value={publico}
          onValueChange={setPublico}
        />
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={cadastrarJogo}
      >
        <Text style={styles.textoBotao}>
          Salvar
        </Text>
      </TouchableOpacity>
    </View>
  )
}