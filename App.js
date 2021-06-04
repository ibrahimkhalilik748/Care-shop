import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import CarItam from './components/CarItam';

export default function App() {
  return (
    <View style={styles.container}>

      <CarItam
        name={'Type 3'}
        tagline={'Order Online for'}
        taglineCTA={'Touchless Delivery'}
        image={require('./components/images/Model3.jpeg')}
      />


    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
