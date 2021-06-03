import React from 'react';
import styles from './styles'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

 const carItam = (props) => {
  return (
      <View style={styles.carContainer}>
        <ImageBackground
        source={require('../images/ModelX.jpeg')} 
        style={styles.image}
        />
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subTitle}>Starting at $69.420</Text>
        </View>
      </View>
  );
}
export default carItam;