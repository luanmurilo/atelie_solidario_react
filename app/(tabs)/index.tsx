import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen = () => {
  const botoes = ['Crochê', 'Origami', 'Pano de Prato', 'Pintura'];
  const router = useRouter();

  const handlePress = (categoria: string) => {
    router.push(`/projetos?categoria=${encodeURIComponent(categoria)}`);
  };

  return (
    <View style={styles.container}>
      {/* Topo: ícones e título */}
      <View style={styles.header}>
        <Text style={styles.title}>Atelie Solidario</Text>
      </View>

      {/* Botões */}
      <View style={styles.buttonsContainer}>
        {botoes.map((item, index) => (
          <TouchableOpacity key={index} style={styles.button} onPress={() => handlePress(item)}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* WhatsApp fixo */}
      <View style={styles.whatsappContainer}></View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 24,
    paddingTop: 50,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: -50,
    paddingTop: 150,
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 16,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  whatsappContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
});
