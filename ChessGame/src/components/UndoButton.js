// src/components/UndoButton.js
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const UndoButton = ({ onUndo }) => {
    return (
        <View style={styles.buttonContainer}>
            <Button title="Undo Last Move" onPress={onUndo} color="darkorange" />
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
});

export default UndoButton;