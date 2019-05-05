import React, { Component } from 'react';
import { View } from 'react-native';
import WordToGuess from './WordToGuess.js';
import WordsGrid from './WordsGrid';

class WordsContainer extends Component {

    setWordContainerPosition = e => {
        const { x, y } = e.nativeEvent.layout;
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
                    isFlagVisible={this.props.isFlagVisible} />
                <WordsGrid
                    wordList={this.props.wordList}
                    currentWord={this.props.currentWord}
                    isFlagVisible={this.props.isFlagVisible}
                    setWordPosition={this.props.setWordPosition} />
            </View>
        );
    }
}

export default WordsContainer
