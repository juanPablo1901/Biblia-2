import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importa correctamente tus pantallas
import Inicio from './components/Inicio/index';
import Informacion from './components/Informacion/index';
import Versiculos from './components/Versiculos/index';
import Random from './components/Random/index';

const Stack = createStackNavigator();

function Navbar({ navigation }) {
  return (
    <View style={styles.nav}>
      <TouchableOpacity onPress={() => navigation.navigate('Empezar')}>
        <Text style={styles.navLink}>INICIO</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Acerca')}>
        <Text style={styles.navLink}>ACERCA DE NOSOTROS</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Versiculo')}>
        <Text style={styles.navLink}>VERSÍCULOS</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Random')}>
        <Text style={styles.navLink}>MENSAJE DE DIOS</Text>
      </TouchableOpacity>
    </View>
  );
}

function Footer() {
  return (
    <View style={styles.footer}>
      <Text
        style={styles.footerText}
        onPress={() => Linking.openURL('mailto:juanpagarsi18@gmail.com')}
      >
        Una página creada por:{"\n"}Juan Pablo Castañeda Silva
      </Text>
      <Text style={styles.footerText}>© Copyright 2025</Text>
      <Text style={styles.footerText}>Teléfonos: (+57) 312 4327208</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Cada pantalla tendrá el Navbar y el Footer */}
        <Stack.Screen name="Empezar">
          {({ navigation }) => (
            <View style={styles.bodyApp}>
              <Navbar navigation={navigation} />
              <Inicio />
              <Footer />
            </View>
          )}
        </Stack.Screen>

        <Stack.Screen name="Acerca">
          {({ navigation }) => (
            <View style={styles.bodyApp}>
              <Navbar navigation={navigation} />
              <Informacion />
              <Footer />
            </View>
          )}
        </Stack.Screen>

        <Stack.Screen name="Versiculo">
          {({ navigation }) => (
            <View style={styles.bodyApp}>
              <Navbar navigation={navigation} />
              <Versiculos />
              <Footer />
            </View>
          )}
        </Stack.Screen>

        <Stack.Screen name="Random">
          {({ navigation }) => (
            <View style={styles.bodyApp}>
              <Navbar navigation={navigation} />
              <Random />
              <Footer />
            </View>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bodyApp: {
    flex: 1,
    backgroundColor: '#D6D1B1',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    flexDirection: 'row',
    backgroundColor: '#8B4E23',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
  },
  navLink: {
    color: '#fff',
    fontSize: 18,
    marginHorizontal: 10,
    padding: 8,
    borderRadius: 8,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#8B4E23',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    width: '100%',
  },
  footerText: {
    color: '#F3EFF5',
    textAlign: 'center',
    marginVertical: 5,
  },
});
