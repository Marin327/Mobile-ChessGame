// src/components/GameStatus.js
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const GameStatus = ({ status }) => {
    return <Text style={styles.status}>{status}</Text>;
};

const styles = StyleSheet.create({
    status: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
    },
});

export default GameStatus;