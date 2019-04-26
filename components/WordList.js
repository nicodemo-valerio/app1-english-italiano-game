import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../Style.js';

class WordList extends React.Component {
    constructor(props) {
        super(props);
    }

    setEngPosition = e => {
        const x = e.nativeEvent.layout.x;
        const y = e.nativeEvent.layout.y;
        const width = e.nativeEvent.layout.width;
        const height = e.nativeEvent.layout.height;
        this.props.setWordPosition('eng', x, y, width, height);
    }

    setItaPosition = e => {
        const x = e.nativeEvent.layout.x;
        const y = e.nativeEvent.layout.y;
        const width = e.nativeEvent.layout.width;
        const height = e.nativeEvent.layout.height;
        this.props.setWordPosition('ita', x, y, width, height);
    }

    setWordContainerPosition = e => {
        const x = e.nativeEvent.layout.x;
        const y = e.nativeEvent.layout.y;
        this.props.setWordPosition('eng', x, y, 0, 0);
        this.props.setWordPosition('ita', x, y, 0, 0);
    }

    render() {
        return (
            <View style={styles.wordList} onLayout={e => this.setWordContainerPosition(e)}>
                <View onLayout={e => this.setItaPosition(e)}><Text style={styles.word}>{this.props.words[0].ita}</Text></View>
                <Text style={styles.word}>{this.props.words[1].eng}</Text>
                <Text style={styles.word}>{this.props.words[2].ita}</Text>
                <Text style={styles.word}>{this.props.words[3].eng}</Text>
                <Text style={styles.word}>{this.props.words[2].eng}</Text>
                <Text style={styles.word}>{this.props.words[3].ita}</Text>
                <View onLayout={e => this.setEngPosition(e)}><Text style={styles.word}>{this.props.words[0].eng}</Text></View>
                <Text style={styles.word}>{this.props.words[1].ita}</Text>
            </View>
        )
    }
}

export default WordList
