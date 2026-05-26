import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    padding: 20
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 25
  },

  label: {
    fontWeight: 'bold',
    color: '#334155',
    marginBottom: 6
  },

  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#cbd5e1'
  },

  botao: {
    backgroundColor: '#2563eb',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 15
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e2e8f0'
  },

  imagem: {
    width: '100%',
    height: 170
  },

  info: {
    padding: 15
  },

  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f172a'
  },

  plataforma: {
    color: '#64748b',
    marginTop: 4
  }
})