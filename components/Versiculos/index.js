import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";

export default function Versiculos() {
  const [data, setData] = useState(null);
  const [book, setBook] = useState("");
  const [chapter, setChapter] = useState("");
  const [verse, setVerse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleBuscar = async () => {
    if (!book || !chapter || !verse) {
      Alert.alert("Atención", "Completa todos los campos");
      return;
    }

    if (loading) return;

    setLoading(true);
    setError(null);
    setData(null);

    const url = `https://bible-api.com/${book}+${chapter}:${verse}`;

    try {
      const resp = await fetch(url);
      if (!resp.ok) throw new Error("Error al cargar datos");
      const json = await resp.json();
      setData(json);
    } catch (err) {
      console.error(err);
      setError("No se pudo obtener información");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Buscador de Versículos</Text>

      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="Libro (ej: john)"
          value={book}
          onChangeText={setBook}
        />
        <TextInput
          style={styles.input}
          placeholder="Capítulo"
          value={chapter}
          onChangeText={setChapter}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Versículo"
          value={verse}
          onChangeText={setVerse}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleBuscar}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Buscando..." : "Buscar"}
        </Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#007BFF" style={{ marginTop: 10 }} />}

      {error && <Text style={styles.error}>{error}</Text>}

      {data?.text && (
        <View style={styles.result}>
          <Text style={styles.reference}>{data.reference}</Text>
          <Text style={styles.verseText}>{data.text}</Text>
          <Text style={styles.translation}>
            <Text style={{ fontWeight: "bold" }}>Traducción: </Text>
            {data.translation_name}
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputGroup: {
    width: "100%",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonDisabled: {
    backgroundColor: "#8BBFF8",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginTop: 10,
  },
  result: {
    marginTop: 20,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 15,
    width: "100%",
  },
  reference: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  verseText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  translation: {
    fontSize: 14,
    textAlign: "center",
    color: "#555",
  },
});