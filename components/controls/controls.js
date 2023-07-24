// Controls.js
import React from 'react';
import styles from './Controls.module.css';

class Controls extends React.Component {
    state = {
        isPlaying: true,
    };

    handlePlayPause = () => {
        this.setState((prevState) => ({ isPlaying: !prevState.isPlaying }));
        this.props.onPlayPause();
    }

    render() {
        const { isPlaying } = this.state;

        return (
            <div className={styles.controls}>
                <button className={styles.button} onClick={this.handlePlayPause}>
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
                <button className={styles.button} onClick={this.props.onRewind}>Rewind</button>
                <button className={styles.button} onClick={this.props.onForward}>Forward</button>
            </div>
        );
    }
}

export default Controls;
