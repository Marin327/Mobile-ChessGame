// src/components/CaptureArea.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CaptureArea = ({ capturedPieces }) => {
    return (
        <View style={styles.area}>
            <Text style={styles.text}>Captured Pieces:</Text>
            <Text style={styles.text}>{capturedPieces.join(', ')}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    area: {
        marginTop: 10,
        padding: 10,
    },
    text: {
        fontSize: 16,
    },
});

export default CaptureArea;