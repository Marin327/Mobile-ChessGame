// src/components/MoveValidator.js
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const MoveValidator = ({ isValidMove }) => {
    return (
        <Text style={styles.text}>
            {isValidMove ? 'Valid Move' : 'Invalid Move'}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        color: 'red',
    },
});

export default MoveValidator;