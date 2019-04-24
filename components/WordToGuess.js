import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../Style.js';

class WordToGuess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flagEngPosition: { x: 0, y: 0 },
            flagItaPosition: { x: 0, y: 0 }
        }
    }

    render() {
        return (
            <View style={styles.wordToGuess}>
                <Image source={require('../images/flag-eng.png')} />
                <Image
                    source={require('../images/house.png')}
                    style={styles.wordImage} />
                <Image source={require('../images/flag-ita.png')} />
            </View>
        )
    }
}

export default WordToGuess
