import React, { Component } from 'react';
import { Text, View } from 'react-native';
import CurrentWord from './CurrentWord.js';
import styles from '../Style.js';

class WordsGrid extends Component {
    constructor(props) {
        super(props);
        this.state = { wordStyle: {} }
    }

    setWordPosition = (lang, x, y, width, height) => {
        this.props.setWordPosition(lang, x, y, width, height);
    }

    setWordContainerPosition = e => {
        const { x, y } = e.nativeEvent.layout;
        this.props.setWordPosition(null, x, y, 0, 0);
    }

    render() {

        return (
            <View style={styles.wordList}
                onLayout={e => this.setWordContainerPosition(e)}>
                {this.props.wordList.map((word, index) => {
                    if (word === this.props.currentWord.eng ||
                        word === this.props.currentWord.ita) {
                        return <CurrentWord
                            key={index}
                            word={word}
                            isFlagVisible={this.props.isFlagVisible}
                            lang={(word === this.props.currentWord.eng) ? 'eng' : 'ita'}
                            setWordPosition={this.setWordPosition} />
                    } else {
                        return <Text
                            style={styles.word}
                            key={index}>
                            {word}
                        </Text>
                    }
                })}
            </View>
        );
    }
}

export default WordsGrid
