import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const projetos = [
  { id: '1', nome: 'Projeto 1', cor: '#FFF8DC' }, // cor clara
  { id: '2', nome: 'Projeto 2', cor: '#FFA500' }, // laranja
  { id: '3', nome: 'Projeto 3', cor: '#32CD32' }, // verde
  { id: '4', nome: 'Projeto 4', cor: '#F5DEB3' }, // bege claro
  { id: '5', nome: 'Projeto 5', cor: '#FFA500' }, // laranja
  { id: '6', nome: 'Projeto 6', cor: '#FFE4B5' }, // cor clara
  { id: '7', nome: 'Projeto 7', cor: '#FFF8DC' }, // cor clara
  { id: '8', nome: 'Projeto 8', cor: '#FFA500' }, // laranja
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Topo com ícones e título */}
      <View style={styles.header}>
        <Text style={styles.title}>Atelie Solidario</Text>
      </View>

      {/* Seção de Projetos */}
      <View style={styles.section}>
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>Projeto</Text>
        </View>

        <View style={styles.projectGrid}>
          {projetos.map((proj) => (
            <TouchableOpacity key={proj.id} style={[styles.projectCard, { backgroundColor: proj.cor }]}>
              <Text style={styles.projectText}>{proj.nome}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* WhatsApp fixo */}
      <View style={styles.whatsappContainer}>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 100,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
  },
  section: {
    marginTop: 20,
    flex: 1,
  },
  sectionTitleContainer: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginBottom: 20,
    width:350,
    alignItems: 'center',
  },
  sectionTitle: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  projectGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 16,
  },
  projectCard: {
    width: '48%',
    paddingVertical: 24,
    borderRadius: 10,
    alignItems: 'center',
  },
  projectText: {
    fontSize: 16,
    fontWeight: '600',
  },
  whatsappContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  whatsappIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
