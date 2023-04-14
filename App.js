import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
  Image,
  Switch,
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: '25%', fontSize: 30 }}>Vagas</Text>
      <ScrollView style={styles.scrol}>
        <View style={styles.boxs}>
          <Text>Desevolvedor Backend</Text>
          <Text>Salário: R$3000,00</Text>
          <Text>Descrição: tem que ser depressivo</Text>
          <Text>Contato: meuEmail@gmail.com</Text>
        </View>

        <View style={styles.boxs}>
          <Text>Desevolvedor Backend</Text>
          <Text>Salário: R$3000,00</Text>
          <Text>Descrição: tem que ser depressivo</Text>
          <Text>Contato: meuEmail@gmail.com</Text>
        </View>

        <View style={styles.boxs}>
          <Text>Desevolvedor Backend</Text>
          <Text>Salário: R$3000,00</Text>
          <Text>Descrição: tem que ser depressivo</Text>
          <Text>Contato: meuEmail@gmail.com</Text>
        </View>

        <View style={styles.boxs}>
          <Text>Desevolvedor Backend</Text>
          <Text>Salário: R$3000,00</Text>
          <Text>Descrição: tem que ser depressivo</Text>
          <Text>Contato: meuEmail@gmail.com</Text>
        </View>

        <View style={styles.boxs}>
          <Text>Desevolvedor Backend</Text>
          <Text>Salário: R$3000,00</Text>
          <Text>Descrição: tem que ser depressivo</Text>
          <Text>Contato: meuEmail@gmail.com</Text>
        </View>

        <View style={styles.boxs}>
          <Text>Desevolvedor Backend</Text>
          <Text>Salário: R$3000,00</Text>
          <Text>Descrição: tem que ser depressivo</Text>
          <Text>Contato: meuEmail@gmail.com</Text>
        </View>

      </ScrollView>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  scrol: {
    width: '90%', 
    height: '80%',
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    paddingTop: 250,
    paddingBottom: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxs: {
    width: '100%',
    height: 120,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    display: 'flex'
  },
});
