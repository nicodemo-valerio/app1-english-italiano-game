import React, { Component } from 'react';
import { Text, View } from 'react-native';
import WordToGuess from './WordToGuess.js';
import WordsGrid from './WordsGrid';
import styles from '../Style.js';

class WordsContainer extends Component {

    setWordContainerPosition = e => {
        const { x, y } = e.nativeEvent.layout;
        //console.log('WordsContainer.setWordContainerPosition:', x, y);
        this.props.setWordPosition(null, x, y, 0, 0);
    }

    render() {

        return (
            <View
                style={{ flex: 3 }}
                onLayout={e => this.setWordContainerPosition(e)}
            >
                <WordToGuess
                    currentWord={this.props.currentWord}
                    updateFlagPosition={this.props.updateFlagPosition}
                    isEngFlagVisible={this.props.isEngFlagVisible}
                    isItaFlagVisible={this.props.isItaFlagVisible} />
                <WordsGrid
                    wordList={this.props.wordList}
                    currentWord={this.props.currentWord}
                    isEngFlagVisible={this.props.isEngFlagVisible}
                    isItaFlagVisible={this.props.isItaFlagVisible}
                    setWordPosition={this.props.setWordPosition} />
            </View>
        );
    }
}

export default WordsContainer
