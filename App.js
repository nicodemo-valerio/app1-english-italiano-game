import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './Style.js';
import Word from './Words.js';
const wordObj = new Word();
import WordToGuess from './components/WordToGuess';
import WordList from './components/WordList';

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
      wordsGrid: { x: 0, y: 0 },
      wordEngPosition: { x: 0, y: 0 },
      wordItaPosition: { x: 0, y: 0 },
      isEngFlagVisible: true,
      isItaFlagVisible: true,
      score: 0,
      time: 0,
      updateTime: null
    }
    this.updateTime = null;
  }

  componentDidMount() {
    const words = wordObj.getWords();

    let wordList = words.map(w => w.eng);
    wordList = wordList.concat(words.map(w => w.ita));
    wordList = wordObj.shuffleArray(wordList);

    const currentWord = words[0];
    this.setState({
      words,
      wordList,
      currentWord
    });

    this.updateTime = setInterval(() => {
      this.setState({ time: this.state.time + 1 })
    }, 1000);
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
    //game over
    if (words.length === 0) {
      const finalState = this.state;
      finalState.words = words;
      finalState.currentWord = { eng: 'You win!', ita: 'Hai vinto!', img: require('./images/win.png') }
      finalState.wordList = ['You win!', 'Hai vinto!'];
      finalState.isEngFlagVisible = false;
      finalState.isItaFlagVisible = false;
      finalState.score += 1;
      clearInterval(this.updateTime);
    } else {
      let wordList = this.state.wordList.filter(word => (word !== wordToDelete.eng && word !== wordToDelete.ita));
      wordList = wordObj.shuffleArray(wordList);
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
  }

  updateFlagPosition = (lang, moveX, moveY) => {
    if (lang === 'eng') {
      this.setState({ flagEngPosition: { moveX: moveX, moveY: moveY } },
        () => {
          if (this.checkPosition(moveX, moveY, this.state.wordEngPosition)) {
            if (!this.state.isItaFlagVisible) {
              //console.log('Guessed 2');
              const wordToDelete = this.state.currentWord;
              this.updateLists(wordToDelete);
            } else {
              //console.log('Guessed 1');
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
              //console.log('Indovinato 2');
              const wordToDelete = this.state.currentWord;
              this.updateLists(wordToDelete);
            } else {
              //console.log('Indovinato 1');
              this.setState({ isItaFlagVisible: false });
            }
          }
        }
      )
    }
  }

  setWordPosition = (lang, x, y, width, height) => {
    //console.log('App.setWordPosition:', lang, x, y, width, height);
    //set new position
    const newPosition = { x: x, y: y, width: width, height: height };
    const wordsGrid = { x: 0, y: 0 };
    //set container position
    const newState = this.state;

    if (lang === 'eng') {
      newState.wordEngPosition = newPosition;
      newState.wordEngPosition.x += this.state.wordsGrid.x;
      newState.wordEngPosition.y += this.state.wordsGrid.y;
    }
    if (lang === 'ita') {
      newState.wordItaPosition = newPosition;
      newState.wordItaPosition.x += this.state.wordsGrid.x;
      newState.wordItaPosition.y += this.state.wordsGrid.y;
    }

    //add container position to new position
    if (lang === null) {
      newState.wordsGrid.x = x;
      newState.wordsGrid.y = y;
      const wordEngPosition = this.state.wordEngPosition;
      wordEngPosition.x += newPosition.x;
      wordEngPosition.y += newPosition.y;
      const wordItaPosition = this.state.wordItaPosition;
      wordItaPosition.x += newPosition.x;
      wordItaPosition.y += newPosition.y;
      newState.wordEngPosition = wordEngPosition;
      newState.wordItaPosition = wordItaPosition;
    }
    this.setState(newState);
    //this.setState(newState, () => console.log('App.setWordPosition', this.state.wordEngPosition, this.state.wordItaPosition));
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
          <Text>Score: {this.state.score} / {this.state.words.length + this.state.score}</Text>
          <Text>Time: {this.state.time} seconds</Text>
        </View>
      </View>
    );
  }
}
