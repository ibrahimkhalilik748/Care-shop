import React from 'react';
import styles from './styles';
import { View, Text, Pressable } from 'react-native';

const StyleButton = (props) => {
    const { type, content, onPress } = props;

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, { backgroundColor: backgroundColor }]}
                onPress={() => {
                    console.warn(`${content} button clicked`)
                }}
            >
                <Text style={[styles.text, { color: textColor }]}>{content}</Text>
            </Pressable>
        </View>
    );
}
export default StyleButton;