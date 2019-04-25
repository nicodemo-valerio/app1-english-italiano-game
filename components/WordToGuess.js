import React, { Component } from 'react';
import { Text, View, Image, PanResponder, Animated } from 'react-native';
import Flag from './Flag.js';
import styles from '../Style.js';

class WordToGuess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: props.currentWord
        }
    }

    render() {
        return (
            <View style={styles.wordToGuess}>
                <Flag type="eng" updateFlagPosition={this.props.updateFlagPosition} />
                <Image
                    source={this.state.word.img}
                    style={styles.wordImage} />
                <Flag type="ita" updateFlagPosition={this.props.updateFlagPosition} />
            </View>
        )
    }
}

export default WordToGuess
