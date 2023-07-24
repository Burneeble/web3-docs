// Controls.js
import React from 'react';
import styles from './Controls.module.css';

class Controls extends React.Component {
    render() {
        return (
            <div className={styles.controls}>
                <button className={styles.button} onClick={this.props.onPlay}>Play</button>
                <button className={styles.button} onClick={this.props.onPause}>Pause</button>
                <button className={styles.button} onClick={this.props.onRewind}>Rewind</button>
                <button className={styles.button} onClick={this.props.onForward}>Forward</button>
            </div>
        );
    }
}

export default Controls;