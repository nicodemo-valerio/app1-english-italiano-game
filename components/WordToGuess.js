import React, { Component } from 'react';
import { Text, View, Image, PanResponder, Animated } from 'react-native';
import Flag from './Flag.js';
import styles from '../Style.js';

class WordToGuess extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.currentWord !== null) {
            return (
                <View style={styles.wordToGuess}>
                    <Flag type="eng"
                        updateFlagPosition={this.props.updateFlagPosition}
                        isVisible={this.props.isEngFlagVisible} />
                    <Image
                        source={this.props.currentWord.img}
                        style={styles.wordImage} />
                    <Flag type="ita"
                        updateFlagPosition={this.props.updateFlagPosition}
                        isVisible={this.props.isItaFlagVisible} />
                </View>
            )
        }
        return null;
    }
}

export default WordToGuess
