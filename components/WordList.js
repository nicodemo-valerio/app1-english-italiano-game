import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../Style.js';

class WordList extends React.Component {
    constructor(props) {
        super(props);
        //Todo: random order
        this.state = {
            words: props.words,
            wordContainerPosition: null,
            wordEngPosition: null,
            wordEngPosition: null
        }
    }

    setEngPosition = (e) => {
        const x = e.nativeEvent.layout.x;
        const y = e.nativeEvent.layout.y;
        const width = e.nativeEvent.layout.width;
        const height = e.nativeEvent.layout.height;
        this.props.setEngPosition(x, y, width, height);

    }

    setItaPosition = (e) => {
        const x = e.nativeEvent.layout.x;
        const y = e.nativeEvent.layout.y;
        const width = e.nativeEvent.layout.width;
        const height = e.nativeEvent.layout.height;
        this.props.setItaPosition(x, y, width, height);
    }

    setWordContainerPosition = e => {
        this.setState({ wordContainerPosition: e.nativeEvent.layout }, () => {
            const x = this.state.wordContainerPosition.x;
            const y = this.state.wordContainerPosition.y;
            this.props.setEngPosition(x, y, 0, 0);
            this.props.setItaPosition(x, y, 0, 0);
        }
        )
    }

    render() {
        return (
            <View style={styles.wordList} onLayout={e => this.setWordContainerPosition(e)}>
                <View onLayout={e => this.setItaPosition(e)}><Text style={styles.word}>{this.state.words[0].ita}</Text></View>
                <Text style={styles.word}>{this.state.words[1].eng}</Text>
                <Text style={styles.word}>{this.state.words[2].ita}</Text>
                <Text style={styles.word}>{this.state.words[3].eng}</Text>
                <Text style={styles.word}>{this.state.words[2].eng}</Text>
                <Text style={styles.word}>{this.state.words[3].ita}</Text>
                <View onLayout={e => this.setEngPosition(e)}><Text style={styles.word}>{this.state.words[0].eng}</Text></View>
                <Text style={styles.word}>{this.state.words[1].ita}</Text>
            </View>
        )
    }
}

export default WordList
