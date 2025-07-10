import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { projetos } from '../data/projetos'; // importa os dados

const ProjetoSelecionado = () => {
  const { id } = useLocalSearchParams();
  const projeto = projetos.find((p) => p.id === id);

  if (!projeto) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Projeto não encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{projeto.nome}</Text>

      {projeto.passos.map((passo, index) => (
        <View key={index} style={styles.passoContainer}>
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>Imagem {index + 1}</Text>
          </View>
          <Text style={styles.texto}>{passo.texto}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default ProjetoSelecionado;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  passoContainer: {
    marginBottom: 24,
    alignItems: 'center',
  },
  placeholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#EEE',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  placeholderText: {
    color: '#888',
    fontSize: 16,
  },
  texto: {
    fontSize: 16,
    textAlign: 'center',
  },
});
