// src/components/Settings.js
import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

const Settings = ({ isSoundEnabled, toggleSound }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Enable Sound</Text>
            <Switch
                value={isSoundEnabled}
                onValueChange={toggleSound}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    text: {
        fontSize: 18,
        marginRight: 10,
    },
});

export default Settings;