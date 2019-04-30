import React, { Component } from 'react'
import { Text, View } from 'react-native';
import styles from '../Style.js';

export class CurrentWord extends Component {
    setWordPosition = (e) => {
        const { x, y, width, height } = e.nativeEvent.layout;
        //console.log('CurrentWord.setWordPosition(): ', this.props.lang, x, y, width, height);
        this.props.setWordPosition(this.props.lang, x, y, width, height);
    }

    render() {
        return (
            <Text
                style={styles.word}
                onLayout={e => this.setWordPosition(e)}>
                {this.props.word}
            </Text>
        )
    }
}

export default CurrentWord
