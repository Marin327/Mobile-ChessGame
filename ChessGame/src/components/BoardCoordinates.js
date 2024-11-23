// src/components/BoardCoordinates.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BoardCoordinates = () => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <View style={styles.container}>
            <View style={styles.columnLabels}>
                {letters.map((letter) => (
                    <Text key={letter} style={styles.label}>{letter}</Text>
                ))}
            </View>
            {numbers.map((number) => (
                <View key={number} style={styles.row}>
                    <Text style={styles.label}>{number}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    columnLabels: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingVertical: 5,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default BoardCoordinates;