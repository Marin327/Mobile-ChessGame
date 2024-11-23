// src/components/ChessBoard.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Square from './Square';

const ChessBoard = () => {
    const rows = 8;
    const cols = 8;

    const renderSquares = () => {
        const squares = [];
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                squares.push(<Square key={`${row}-${col}`} row={row} col={col} />);
            }
        }
        return squares;
    };

    return (
        <View style={styles.board}>
            {renderSquares()}
        </View>
    );
};

const styles = StyleSheet.create({
    board: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 320, // 8 * 40 (square size)
        height: 320, // 8 * 40 (square size)
    },
});

export default ChessBoard;