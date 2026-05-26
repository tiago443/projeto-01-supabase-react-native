import { View, Text, Image } from 'react-native'

import { styles } from '../styles/styles'

export default function CardJogo({ jogo }) {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: jogo.imagem
        }}
        style={styles.imagem}
      />

      <View style={styles.info}>
        <Text style={styles.nome}>
          {jogo.nome}
        </Text>

        <Text style={styles.plataforma}>
          {jogo.plataforma}
        </Text>

        <Text
          style={{
            marginTop: 10,
            fontWeight: 'bold',
            color: jogo.publico
              ? '#16a34a'
              : '#dc2626'
          }}
        >
          {jogo.publico
            ? '🌍 Público'
            : '🔒 Privado'}
        </Text>
      </View>
    </View>
  )
}