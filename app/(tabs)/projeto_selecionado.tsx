import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { projetos } from "../data/projetos"; // importa os dados

const ProjetoSelecionado = () => {
  const { id } = useLocalSearchParams();
  const projeto = projetos.find((p) => p.id === id);
  const coverModeIds = ["5", "2", "6", "3"];
  const projectResizeControl =
    projeto && coverModeIds.includes(projeto.id) ? "cover" : "contain";

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
          <View style={styles.imageWrapper}>
            <Image
              source={passo.src}
              style={styles.img}
              resizeMode={projectResizeControl}
            />
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
    backgroundColor: "#FFF",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  passoContainer: {
    marginBottom: 24,
    alignItems: "center",
  },
  placeholder: {
    width: "100%",
    height: 200,
    backgroundColor: "#EEE",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  imageWrapper: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  placeholderText: {
    color: "#888",
    fontSize: 16,
  },
  texto: {
    fontSize: 16,
    textAlign: "center",
  },
});
