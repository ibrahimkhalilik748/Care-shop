import React from 'react';
import styles from './styles';
import { View, Text, Pressable } from 'react-native';

const StyleButton = (props) => {
    return (
        <View style={styles.container}>
            <Pressable
            style={styles.button}
            onPress={() => {
                console.warn( 'hello there')
            }}
            >
                <Text style={styles.text}>Custom Oder</Text>
            </Pressable>
        </View>
    );
}
export default StyleButton;