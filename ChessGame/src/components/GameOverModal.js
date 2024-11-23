// src/components/GameOverModal.js
import React from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';

const GameOverModal = ({ visible, onClose, winner }) => {
    return (
        <Modal transparent={true} visible={visible} animationType="fade">
            <View style={styles.modal}>
                <View style={styles.modalContent}>
                    <Text style={styles.winner}>{winner} Wins!</Text>
                    <Button title="Close" onPress={onClose} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    winner: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default GameOverModal;