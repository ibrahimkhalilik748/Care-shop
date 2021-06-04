import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import CarItam from "../CarItam";
import Cars from './Cars';
import styles from './styles';

const Index = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={Cars}
                renderItem={({ item, i }) => <CarItam key={i} car={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
};

export default Index;
