import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './Style.js';
import words from './Words.js';
import WordToGuess from './components/WordToGuess';
import WordList from './components/WordList';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0 };
  }

  render() {
    return (
      <Text>Time: {this.state.time}</Text>
    )
  }
}

class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      total: props.score,
    };
  }

  render() {
    return (
      <Text style={{ textAlign: 'center' }}>Score: {this.state.score}/{this.state.total}</Text>
    )
  }
}

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      words: words,
      flagEngPosition: null,
      flagItaPosition: null,
      wordEngPosition: null,
      wordItaPosition: null
    }
  }

  checkPosition = (moveX, moveY, wordPosition) => {
    if (moveX > wordPosition.x &&
      moveX < wordPosition.x + wordPosition.width &&
      moveY > wordPosition.y &&
      moveY < wordPosition.y + wordPosition.height) return true;
    return false;
  }

  updateFlagPosition = (lang, moveX, moveY) => {
    if (lang === 'eng') {
      this.setState({ flagEngPosition: { moveX: moveX, moveY: moveY } },
        () => {
          if (this.checkPosition(moveX, moveY, this.state.wordEngPosition)) {
            console.log('Guessed!');
          } else { console.log('Not guessed!'); }
        });
    }
    if (lang === 'ita') {
      this.setState({ flagItaPosition: { moveX: moveX, moveY: moveY } },
        () => {
          if (this.checkPosition(moveX, moveY, this.state.wordItaPosition)) {
            console.log('Indovinato!');
          } else { console.log('Non indovinato!'); }
        });
    }
  }

  setWordPosition = (lang, x, y, width, height) => {
    let newPosition = null;
    if (lang === 'eng') {
      newPosition = (this.state.wordEngPosition === null) ? { x: 0, y: 0, width: 0, height: 0 } : this.state.wordEngPosition;
    }
    else {
      newPosition = (this.state.wordItaPosition === null) ? { x: 0, y: 0, width: 0, height: 0 } : this.state.wordItaPosition;
    }
    newPosition.x += x;
    newPosition.y += y;
    newPosition.width += width;
    newPosition.height += height;
    if (lang === 'eng') {
      this.setState({ wordEngPosition: newPosition });
    } else {
      this.setState({ wordItaPosition: newPosition });
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.pageTitle}>English VS Italiano</Text>
        </View>
        <WordToGuess currentWord={this.state.words[0]} updateFlagPosition={this.updateFlagPosition} />
        <WordList words={this.state.words} setWordPosition={this.setWordPosition} />
        <View style={styles.stats}>
          <Score score={this.state.words.length} />
          <Timer />
        </View>
      </View>
    );
  }
}
