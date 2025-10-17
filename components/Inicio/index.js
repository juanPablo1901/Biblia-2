import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

export default function Inicio() {
  return (
    <ScrollView
      contentContainerStyle={styles.inicioSection}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.inicioContainer}>
        <Text style={styles.inicioTitulo}>Bienvenido a Biblia</Text>

        <Text style={styles.inicioDescripcion}>
          <Text style={{ fontWeight: 'bold' }}>BIBLIA</Text> es un sitio en el cual podrás buscar versículos de la Biblia
          en diferentes idiomas, todo con el propósito de incentivar a las personas a reflexionar sobre la palabra de Dios.
        </Text>

        <Text style={styles.inicioSubtitulo}>¿Cómo funciona nuestra web?</Text>

        <Text style={styles.inicioTexto}>
          Explora nuestras secciones, donde podrás descubrir versículos inspiradores, información sobre nuestro equipo y contenido pensado para ti.  
          Usa la barra de navegación superior para moverte fácilmente entre las diferentes páginas del sitio.
        </Text>

        <Text style={styles.inicioMensaje}>
          ¡Explora, inspírate y deja que Dios entre en tu hogar!
        </Text>
      </View>
    </ScrollView>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  inicioSection: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D6D1B1',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  inicioContainer: {
    width: width * 0.9, // 🔹 asegura que el contenedor nunca exceda el ancho de pantalla
    maxWidth: 800,
    backgroundColor: '#D6D1B1',
    borderRadius: 16,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 4,
  },
  inicioTitulo: {
    color: '#381A00',
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    flexWrap: 'wrap', // 🔹 asegura que las líneas no se salgan
  },
  inicioDescripcion: {
    color: '#444',
    fontSize: 17,
    lineHeight: 26,
    marginBottom: 25,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  inicioSubtitulo: {
    color: '#222',
    fontSize: 20,
    marginTop: 30,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  inicioTexto: {
    color: '#555',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 15,
    marginBottom: 25,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  inicioMensaje: {
    fontWeight: 'bold',
    color: '#381A00',
    fontSize: 18,
    marginTop: 15,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
});
