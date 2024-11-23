// src/components/PlayerInfo.js
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const PlayerInfo = ({ name, rating }) => {
    return (
        <Text style={styles.info}>
            {name} - Rating: {rating}
        </Text>
    );
};

const styles = StyleSheet.create({
    info: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
    },
});

export default PlayerInfo;