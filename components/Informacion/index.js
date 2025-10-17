import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import foto from './Foto-de-Juan-Pablo.jpg'

export default function Informacion() {
  const abrirGitHub = () => {
    Linking.openURL('https://github.com/juanPablo1901');
  };

  return (
    <ScrollView contentContainerStyle={styles.infoSection}>
      <Text style={styles.infoTitle}>Información del Proyecto</Text>

      <View style={styles.infoFoto}>
        <Image
          source= {foto}
          style={styles.infoImagen}
        />
      </View>

      <View style={styles.tabla}>
        <View style={styles.tablaFila}>
          <Text style={styles.tablaTh}>Nombre:</Text>
          <Text style={styles.tablaTd}>Biblia App</Text>
        </View>
        <View style={styles.tablaFila}>
          <Text style={styles.tablaTh}>Versión:</Text>
          <Text style={styles.tablaTd}>1.0.0</Text>
        </View>
        <View style={styles.tablaFila}>
          <Text style={styles.tablaTh}>Autor:</Text>
          <Text style={styles.tablaTd}>Juan Pablo Castañeda</Text>
        </View>
      </View>

      <View style={styles.tablaHorizontal}>
        <Text style={styles.tablaTh}>Repositorio:</Text>
        <TouchableOpacity onPress={abrirGitHub}>
          <Text style={styles.githubLink}>github.com/tu_usuario/BibliaApp</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.infoSubtitulo}>Descripción</Text>
      <Text style={styles.infoTexto}>
        Esta aplicación tiene como objetivo ayudar a las personas a reflexionar sobre la palabra de Dios mediante versículos disponibles en distintos idiomas.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  infoSection: {
    backgroundColor: '#381A00',
    padding: 30,
    borderRadius: 12,
    margin: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
  infoTitle: {
    fontSize: 28,
    color: '#8B4E23',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoFoto: {
    alignItems: 'center',
    marginBottom: 20,
  },
  infoImagen: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  tabla: {
    width: '100%',
    backgroundColor: '#D6D1B1',
    borderRadius: 8,
    paddingVertical: 10,
  },
  tablaFila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tablaTh: {
    fontWeight: 'bold',
    color: '#8B4E23',
  },
  tablaTd: {
    color: '#000',
  },
  tablaHorizontal: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  githubLink: {
    color: '#8B4E23',
    fontWeight: '500',
    marginLeft: 6,
  },
  infoSubtitulo: {
    fontSize: 22,
    color: '#8B4E23',
    marginTop: 30,
    marginBottom: 10,
    textAlign: 'center',
  },
  infoTexto: {
    color: '#F3EFF5',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
});