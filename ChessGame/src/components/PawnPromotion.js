// src/components/PawnPromotion.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const PawnPromotion = ({ onPromote }) => {
    const [selectedPiece, setSelectedPiece] = useState('Queen');

    const handlePromotion = () => {
        onPromote(selectedPiece);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Promote your Pawn to:</Text>
            <View style={styles.pieceChoices}>
                {['Queen', 'Rook', 'Bishop', 'Knight'].map((piece) => (
                    <Button
                        key={piece}
                        title={piece}
                        onPress={() => setSelectedPiece(piece)}
                        color={selectedPiece === piece ? 'blue' : 'gray'}
                    />
                ))}
            </View>
            <Button title="Promote" onPress={handlePromotion} color="green" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        marginTop: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
    pieceChoices: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
});

export default PawnPromotion;
Стъпка 2: MoveValidator.js
Този компонент ще проверява дали даден ход е валиден в контекста на шахматната игра.

    jsx
Copy code
// src/components/MoveValidator.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

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
Стъпка 3: UndoButton.js
Компонент за бутон за връщане назад на последния ход.

    jsx
Copy code
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