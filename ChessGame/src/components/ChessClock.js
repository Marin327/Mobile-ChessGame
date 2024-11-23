// src/components/ChessClock.js
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const ChessClock = ({ time }) => {
    return <Text style={styles.clock}>{time}</Text>;
};

const styles = StyleSheet.create({
    clock: {
        fontSize: 24,
        textAlign: 'center',
        margin: 10,
    },
});

export default ChessClock;