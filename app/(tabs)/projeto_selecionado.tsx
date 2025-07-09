import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProjectDetailScreen = ({ route, navigation }) => {
  const { nome } = route.params;

  return (
    <View style={styles.container}>
      {/* Cabeçalho preto com título */}
      <View style={styles.header}>
        <Text style={styles.headerText}>{nome}</Text>
        <TouchableOpacity>
        </TouchableOpacity>
      </View>

      {/* Conteúdo futuro aqui */}
      <View style={styles.content}>
        <Text>Detalhes do {nome}...</Text>
      </View>
    </View>
  );
};

export default ProjectDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    backgroundColor: '#000',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  content: {
    padding: 20,
  },
});
