import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../Style.js';

class WordList extends React.Component {
    constructor(props) {
        super(props);
    }

    setWordPosition = (e, lang) => {
        //console.log('WordList.setWordPosition(): ', lang);
        this.props.setWordPosition(
            lang,
            e.nativeEvent.layout.x,
            e.nativeEvent.layout.y,
            e.nativeEvent.layout.width,
            e.nativeEvent.layout.height);
    }

    setWordContainerPosition = e => {
        //console.log('WordList.setWordContainerPosition(): ');
        this.props.setWordPosition('eng', e.nativeEvent.layout.x, e.nativeEvent.layout.y, 0, 0);
        this.props.setWordPosition('ita', e.nativeEvent.layout.x, e.nativeEvent.layout.y, 0, 0);
    }

    render() {
        return (
            <View style={styles.wordList}
                onLayout={e => this.setWordContainerPosition(e)}>
                {this.props.wordList.map((word, index) => {
                    console.log('map: ', index, word, this.props.currentWord);
                    if (word === this.props.currentWord.eng || word === this.props.currentWord.ita) {
                        return <Text
                            style={styles.word}
                            key={index}
                            onLayout={e => this.setWordPosition(e, (word === this.props.currentWord.eng ? 'eng' : 'ita'))}>
                            {word}
                        </Text>
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

export default WordList
