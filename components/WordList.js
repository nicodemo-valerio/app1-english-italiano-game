import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../Style.js';

class WordList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wordEngPosition: { x: 0, y: 0 },
            wordItaPosition: { x: 0, y: 0 }
        }
    }

    render() {
        return (
            <View style={styles.wordList}>
                <Text style={styles.word}>Cane</Text>
                <Text style={styles.word}>Hand</Text>
                <Text style={styles.word}>Flag</Text>
                <Text style={styles.word}>Mano</Text>
                <Text style={styles.word}>Casa</Text>
                <Text style={styles.word}>Bandiera</Text>
                <Text style={styles.word}>House</Text>
                <Text style={styles.word}>Dog</Text>
            </View>
        )
    }
}

export default WordList
