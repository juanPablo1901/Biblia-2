import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

export default function Random() {
  const [versiculo, setVersiculo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const obtenerVersiculoAleatorio = async () => {
    setLoading(true);
    try {
      const respuesta = await fetch("https://labs.bible.org/api/?passage=random&type=json");
      const data = await respuesta.json();

      // La respuesta es un array con un único versículo
      const versiculoData = data[0];
      setVersiculo({
        texto: versiculoData.text,
        referencia: `${versiculoData.bookname} ${versiculoData.chapter}:${versiculoData.verse}`,
      });
      setError(null);
    } catch (err) {
      console.error(err);
      setError("No se pudo obtener el versículo aleatorio.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Versículo Aleatorio</Text>

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={obtenerVersiculoAleatorio}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Cargando..." : "Mostrar versículo"}
        </Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#007BFF" style={{ marginTop: 10 }} />}

      {versiculo && (
        <View style={styles.verseContainer}>
          <Text style={styles.reference}>{versiculo.referencia}</Text>
          <Text style={styles.verseText}>{versiculo.texto}</Text>
        </View>
      )}

      {error && <Text style={styles.error}>{error}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonDisabled: {
    backgroundColor: "#8BBFF8",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  verseContainer: {
    marginTop: 20,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
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
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});
