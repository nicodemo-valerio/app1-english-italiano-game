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

  updateFlagPosition = (lang, moveX, moveY) => {
    if (lang === 'eng') {
      this.setState({ flagEngPosition: { moveX: moveX, moveY: moveY } },
        () => {
          if (moveX > this.state.wordEngPosition.x &&
            moveX < this.state.wordEngPosition.x + this.state.wordEngPosition.width &&
            moveY > this.state.wordEngPosition.y &&
            moveY < this.state.wordEngPosition.y + this.state.wordEngPosition.height) {
            console.log('eng Guessed!');
          } else { console.log('eng Not guessed!'); }
        });
    }
    if (lang === 'ita') {
      this.setState({ flagItaPosition: { moveX: moveX, moveY: moveY } },
        () => {
          if (moveX > this.state.wordItaPosition.x &&
            moveX < this.state.wordItaPosition.x + this.state.wordItaPosition.width &&
            moveY > this.state.wordItaPosition.y &&
            moveY < this.state.wordItaPosition.y + this.state.wordItaPosition.height) {
            console.log('ita Guessed!');
          } else { console.log('ita Not guessed!'); }
        });
    }
  }

  setEngPosition = (x, y, width, height) => {
    const newPosition = (this.state.wordEngPosition === null) ? { x: 0, y: 0, width: 0, height: 0 } : this.state.wordEngPosition;
    newPosition.x += x;
    newPosition.y += y;
    newPosition.width += width;
    newPosition.height += height;
    this.setState({ wordEngPosition: newPosition },
      () => console.log('wordEngPosition:', this.state.wordEngPosition)
    );
  }

  setItaPosition = (x, y, width, height) => {
    const newPosition = (this.state.wordItaPosition === null) ? { x: 0, y: 0, width: 0, height: 0 } : this.state.wordItaPosition;
    newPosition.x += x;
    newPosition.y += y;
    newPosition.width += width;
    newPosition.height += height;
    this.setState({ wordItaPosition: newPosition },
      () => console.log('wordItaPosition:', this.state.wordItaPosition)
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.pageTitle}>English VS Italiano</Text>
        </View>
        <WordToGuess currentWord={this.state.words[0]} updateFlagPosition={this.updateFlagPosition} />
        <WordList words={this.state.words} setEngPosition={this.setEngPosition} setItaPosition={this.setItaPosition} />
        <View style={styles.stats}>
          <Score score={this.state.words.length} />
          <Timer />
        </View>
      </View>
    );
  }
}
