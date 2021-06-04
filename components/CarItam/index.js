import React from 'react';
import styles from './styles'
import { ImageBackground, Text, View } from 'react-native';
import StyleButton from '../StyleButton';

const CarItam = (props) => {
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
      <StyleButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Order was pressed");
          }}
        />

        <StyleButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory was pressed");
          }}
        />
    </View>
  );
}
export default CarItam;