// src/components/MoveHistory.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MoveHistory = ({ moves }) => {
    return (
        <View style={styles.history}>
            {moves.map((move, index) => (
                <Text key={index} style={styles.move}>
                    {move}
                </Text>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    history: {
        padding: 10,
        marginTop: 10,
    },
    move: {
        fontSize: 16,
    },
});

export default MoveHistory;