import React, { Component } from 'react';
import { View } from 'react-native';
import WordToGuess from './WordToGuess.js';
import WordsGrid from './WordsGrid';

class WordsContainer extends Component {

    setLayout = e => {
        const { x, y } = e.nativeEvent.layout;
        this.props.setLayout(null, x, y, 0, 0);
    }

    render() {
        return (
            <View style={{ flex: 3 }}
                onLayout={e => this.setLayout(e)}>
                <WordToGuess
                    currentWord={this.props.currentWord}
                    updateFlagPosition={this.props.updateFlagPosition}
                    isFlagVisible={this.props.isFlagVisible} />
                <WordsGrid
                    wordList={this.props.wordList}
                    currentWord={this.props.currentWord}
                    isFlagVisible={this.props.isFlagVisible}
                    setLayout={this.props.setLayout} />
            </View>
        );
    }
}

export default WordsContainer
