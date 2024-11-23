// src/components/GameTimer.js
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

const GameTimer = ({ isRunning, onTimeUp }) => {
    const [time, setTime] = useState(300); // 5 minutes = 300 seconds

    useEffect(() => {
        if (isRunning && time > 0) {
            const timer = setInterval(() => setTime(time - 1), 1000);
            return () => clearInterval(timer);
        }

        if (time === 0) {
            onTimeUp();
        }
    }, [isRunning, time]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return <Text style={styles.timer}>{formatTime(time)}</Text>;
};

const styles = StyleSheet.create({
    timer: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default GameTimer;