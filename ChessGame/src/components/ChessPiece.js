// src/components/ChessPiece.js
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const ChessPiece = ({ type, color }) => {
    return (
        <Text style={[styles.piece, { color: color === 'black' ? 'black' : 'white' }]}>
            {type}
        </Text>
    );
};

const styles = StyleSheet.create({
    piece: {
        fontSize: 24,
        textAlign: 'center',
        lineHeight: 40,
    },
});

export default ChessPiece;