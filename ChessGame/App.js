// App.js
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import BoardCoordinates from './src/components/BoardCoordinates';
import CaptureArea from './src/components/CaptureArea';
import ChessBoard from './src/components/ChessBoard';
import GameOverModal from './src/components/GameOverModal';
import GameStatus from './src/components/GameStatus';
import GameTimer from './src/components/GameTimer';
import MoveHistory from './src/components/MoveHistory';
import MoveValidator from './src/components/MoveValidator';
import PawnPromotion from './src/components/PawnPromotion';
import PlayerInfo from './src/components/PlayerInfo';
import Settings from './src/components/Settings';
import UndoButton from './src/components/UndoButton';

const App = () => {
    const [moves, setMoves] = useState([]);
    const [time, setTime] = useState('5:00');
    const [gameStatus, setGameStatus] = useState('Game in Progress');
    const [capturedPieces, setCapturedPieces] = useState([]);
    const [isSoundEnabled, setSoundEnabled] = useState(true);
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState('');
    const [isRunning, setIsRunning] = useState(true);

    const toggleSound = () => setSoundEnabled(!isSoundEnabled);
    const onUndo = () => setMoves(moves.slice(0, -1));
    const onTimeUp = () => setGameStatus('Time Up');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ChessBoard />
                <GameTimer isRunning={isRunning} onTimeUp={onTimeUp} />
                <GameStatus status={gameStatus} />
                <MoveHistory moves={moves} />
                <MoveValidator isValidMove={true} />
                <PlayerInfo name="Player 1" rating="1500" />
                <CaptureArea capturedPieces={capturedPieces} />
                <Settings isSoundEnabled={isSoundEnabled} toggleSound={toggleSound} />
                <UndoButton onUndo={onUndo} />
                <BoardCoordinates />
                <PawnPromotion onPromote={(piece) => alert(`Promoted to ${piece}`)} />
                <GameOverModal visible={gameOver} winner={winner} onClose={() => setGameOver(false)} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
});

export default App;