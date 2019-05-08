import React, { Component } from 'react';
import { Text, View } from 'react-native';
import CurrentWord from './CurrentWord.js';
import styles from '../Style.js';

class WordsGrid extends Component {
    setLayout = (lang, x, y, width, height) => {
        this.props.setLayout(lang, x, y, width, height);
    }

    handleOnLayout = e => {
        const { x, y } = e.nativeEvent.layout;
        this.props.setLayout(null, x, y, 0, 0);
    }

    render() {
        return (
            <View style={styles.wordList}
                onLayout={e => this.handleOnLayout(e)}>
                {this.props.wordList.map((word, index) => {
                    if (word !== this.props.currentWord.eng && word !== this.props.currentWord.ita) {
                        return <Text
                            style={styles.word}
                            key={index}>
                            {word}
                        </Text>
                    }
                    if (word === this.props.currentWord.eng) {
                        return <CurrentWord
                            key={index}
                            word={word}
                            isFlagVisible={this.props.isFlagVisible}
                            lang="eng"
                            setLayout={this.setLayout} />
                    }
                    if (word === this.props.currentWord.ita) {
                        return <CurrentWord
                            key={index}
                            word={word}
                            isFlagVisible={this.props.isFlagVisible}
                            lang="ita"
                            setLayout={this.setLayout} />
                    }
                })}
            </View>
        );
    }
}

export default WordsGrid
