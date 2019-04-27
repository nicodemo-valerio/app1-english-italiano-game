import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './Style.js';
import Word from './Words.js';
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
  }

  render() {
    return (
      <Text style={{ textAlign: 'center' }}>Score: {this.props.score}</Text>
    )
  }
}

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      words: [],
      wordList: [],
      currentWord: null,
      flagEngPosition: null,
      flagItaPosition: null,
      wordEngPosition: null,
      wordItaPosition: null,
      isEngFlagVisible: true,
      isItaFlagVisible: true,
      score: 0
    }
  }

  componentDidMount() {
    const word = new Word();

    const words = word.getWords();

    let wordList = words.map(w => w.eng);
    wordList = wordList.concat(words.map(w => w.ita));
    wordList = word.shuffleArray(wordList);

    const currentWord = words[0];

    this.setState({ words, wordList, currentWord });
  }

  checkPosition = (moveX, moveY, wordPosition) => {
    if (moveX > wordPosition.x &&
      moveX < wordPosition.x + wordPosition.width &&
      moveY > wordPosition.y &&
      moveY < wordPosition.y + wordPosition.height) return true;
    return false;
  }

  updateLists = (wordToDelete) => {
    const words = this.state.words.filter(word => word !== wordToDelete);
    const wordList = this.state.wordList.filter(word => (word !== wordToDelete.eng && word !== wordToDelete.ita));
    const currentWord = words[0];
    const score = this.state.score + 1;
    this.setState({
      words,
      wordList,
      currentWord,
      isEngFlagVisible: true,
      isItaFlagVisible: true,
      score
    });
  }

  updateFlagPosition = (lang, moveX, moveY) => {
    if (lang === 'eng') {
      this.setState({ flagEngPosition: { moveX: moveX, moveY: moveY } },
        () => {
          if (this.checkPosition(moveX, moveY, this.state.wordEngPosition)) {
            if (!this.state.isItaFlagVisible) {
              console.log('Guessed 2');
              const wordToDelete = this.state.currentWord;
              this.updateLists(wordToDelete);
            } else {
              console.log('Guessed 1');
              this.setState({ isEngFlagVisible: false });
            }
          }
        });
    }
    if (lang === 'ita') {
      this.setState({ flagItaPosition: { moveX: moveX, moveY: moveY } },
        () => {
          if (this.checkPosition(moveX, moveY, this.state.wordItaPosition)) {
            if (!this.state.isEngFlagVisible) {
              console.log('Indovinato 2');
              const wordToDelete = this.state.currentWord;
              this.updateLists(wordToDelete);
            } else {
              console.log('Indovinato 1');
              this.setState({ isItaFlagVisible: false });
            }
          }
        }
      )
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
    console.log('newPosition:', newPosition);
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
        <WordToGuess
          currentWord={this.state.currentWord}
          updateFlagPosition={this.updateFlagPosition}
          isEngFlagVisible={this.state.isEngFlagVisible}
          isItaFlagVisible={this.state.isItaFlagVisible} />
        <WordList
          wordList={this.state.wordList}
          currentWord={this.state.currentWord}
          setWordPosition={this.setWordPosition} />
        <View style={styles.stats}>
          <Score score={this.state.score} />
          <Timer />
        </View>
      </View>
    );
  }
}
