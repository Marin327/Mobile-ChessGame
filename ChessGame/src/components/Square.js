// src/components/Square.js
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Square = ({ row, col }) => {
    const isBlack = (row + col) % 2 === 1;

    return (
        <View
            style={[
                styles.square,
                { backgroundColor: isBlack ? 'black' : 'white' },
            ]}
        />
    );
};

const styles = StyleSheet.create({
    square: {
        width: 40,
        height: 40,
    },
});

export default Square;