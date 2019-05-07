import React, { Component } from 'react'
import { Text } from 'react-native';
import styles from '../Style.js';

export class CurrentWord extends Component {
    setLayout = e => {
        const { x, y, width, height } = e.nativeEvent.layout;
        this.props.setLayout(this.props.lang, x, y, width, height);
    }

    render() {
        let style = { color: 'black' };
        if (!this.props.isFlagVisible['eng'] && this.props.lang === 'eng') {
            style = { color: 'blue' };
        }
        if (!this.props.isFlagVisible['ita'] && this.props.lang === 'ita') {
            style = { color: 'green' };
        }
        return (
            <Text
                style={[styles.word, style]}
                onLayout={e => this.setLayout(e)}>
                {this.props.word}
            </Text>
        )
    }
}

export default CurrentWord
