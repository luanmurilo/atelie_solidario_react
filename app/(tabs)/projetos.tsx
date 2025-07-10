import { useFocusEffect } from '@react-navigation/native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { projetos as todosProjetos } from '../data/projetos';

const ProjetosScreen = () => {
  const { categoria } = useLocalSearchParams();
  const router = useRouter();

  const [categoriaInterna, setCategoriaInterna] = useState<string | null>(null);

  // Atualiza filtro de categoria quando muda o parâmetro
  useEffect(() => {
    if (typeof categoria === 'string' && categoria.trim() !== '') {
      setCategoriaInterna(categoria);
    } else {
      setCategoriaInterna(null);
    }
  }, [categoria]);

  // Limpa filtro quando volta para a tela sem parâmetro
  useFocusEffect(
    useCallback(() => {
      if (typeof categoria !== 'string' || categoria.trim() === '') {
        setCategoriaInterna(null);
      }
    }, [categoria])
  );

  const projetosFiltrados = todosProjetos.filter(
    (proj) => !categoriaInterna || proj.categoria === categoriaInterna
  );

  return (
    <View style={styles.container}>
      {/* Topo com título */}
      <View style={styles.header}>
        <Text style={styles.title}>Ateliê Solidário</Text>
      </View>

      {/* Título da seção */}
      <View style={styles.section}>
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>
            {categoriaInterna ? `Projetos de ${categoriaInterna}` : 'Todos os Projetos'}
          </Text>
        </View>

        {/* Lista de projetos */}
        <View style={styles.projectGrid}>
          {projetosFiltrados.map((proj) => (
            <TouchableOpacity
              key={proj.id}
              style={[styles.projectCard, { backgroundColor: proj.cor }]}
              onPress={() => router.push(`/projeto_selecionado?id=${proj.id}`)}
            >
              <Text style={styles.projectText}>{proj.nome}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Espaço inferior opcional (WhatsApp, etc.) */}
      <View style={styles.whatsappContainer}></View>
    </View>
  );
};

export default ProjetosScreen;

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
    width: 350,
    alignItems: 'center',
  },
  sectionTitle: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
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
});
