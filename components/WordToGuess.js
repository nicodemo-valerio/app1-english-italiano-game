import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Flag from './Flag.js';
import styles from '../Style.js';

class WordToGuess extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.currentWord !== null) {
            return (
                <View style={styles.wordToGuess}>
                    <Flag type="eng"
                        updateFlagPosition={this.props.updateFlagPosition}
                        isVisible={this.props.isFlagVisible['eng']} />
                    <Image
                        source={this.props.currentWord.img}
                        style={styles.wordImage} />
                    <Flag type="ita"
                        updateFlagPosition={this.props.updateFlagPosition}
                        isVisible={this.props.isFlagVisible['ita']} />
                </View>
            )
        }
        return null;
    }
}

export default WordToGuess
