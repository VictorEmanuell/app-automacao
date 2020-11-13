import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import axios from 'axios'

async function lampada() {
  await axios.get('http://192.168.0.26:80/luz').catch((error) => console.log(error))
}

async function tomada() {
  await axios.get('http://192.168.0.26:80/tomada').catch((error) => console.log(error))
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Button title="lâmpada" onPress={lampada}></Button>
      <Button title="Ventilador" onPress={tomada}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    alignItems: 'center',
    textAlign: 'center'
  },
});
