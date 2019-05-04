import React from 'react';
import { Button, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import styles from './Style.js';
import Word from './Words.js';
const wordObj = new Word();
import WordsContainer from './components/WordsContainer';

const WORDNUMBER = 7;

class GameScreen extends React.Component {

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
      time: 0
    }
    this.updateTime = null;
  }

  restartGame = () => {
    const words = wordObj.getWords(WORDNUMBER);

    let wordList = words.map(w => w.eng);
    wordList = wordList.concat(words.map(w => w.ita));
    wordList = wordObj.shuffleArray(wordList);

    const currentWord = words[0];
    this.setState({
      words,
      wordList,
      currentWord,
      score: 0,
      time: 0
    });

    this.updateTime = setInterval(() => {
      this.setState({ time: this.state.time + 1 })
    }, 1000);
  }

  componentDidMount() {
    //this.restartGame();
  }

  checkPosition = (moveX, moveY, wordPosition) => {
    //console.log('checkPosition', moveX, moveY, wordPosition.x, wordPosition.y, wordPosition.width, wordPosition.height)
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
      finalState.isEngFlagVisible = true;
      finalState.isItaFlagVisible = true;
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
    if (this.updateTime === null) {

    }
    if (lang === 'eng') {
      this.setState({ flagEngPosition: { moveX: moveX, moveY: moveY } },
        () => {
          if (this.checkPosition(moveX, moveY, this.state.wordEngPosition)) {
            if (!this.state.isItaFlagVisible) {
              const wordToDelete = this.state.currentWord;
              this.updateLists(wordToDelete);
            } else {
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
              const wordToDelete = this.state.currentWord;
              this.updateLists(wordToDelete);
            } else {
              this.setState({ isItaFlagVisible: false });
            }
          }
        }
      )
    }
  }

  setWordPosition = (lang, x, y, width, height) => {
    //set new position
    const newPosition = { x: x, y: y, width: width, height: height };
    //const wordsGrid = { x: 0, y: 0 };
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
      newState.wordsGrid.x += x;
      newState.wordsGrid.y += y;
      const wordEngPosition = this.state.wordEngPosition;
      wordEngPosition.x += newPosition.x;
      wordEngPosition.y += newPosition.y;
      const wordItaPosition = this.state.wordItaPosition;
      wordItaPosition.x += newPosition.x;
      wordItaPosition.y += newPosition.y;
      newState.wordEngPosition = wordEngPosition;
      newState.wordItaPosition = wordItaPosition;
    }
    //console.log('newState.wordEngPosition', newState.wordEngPosition);
    //console.log('newState.wordItaPosition', newState.wordItaPosition);
    this.setState(newState);
  }

  setPosition = e => {
    const { x, y } = e.nativeEvent.layout;
    //console.log('setPosition', x, y);
    this.setWordPosition(null, x, y, 0, 0);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Text style={styles.pageTitle}>English • Italiano</Text>
        </View>
        <WordsContainer
          wordList={this.state.wordList}
          currentWord={this.state.currentWord}
          updateFlagPosition={this.updateFlagPosition}
          isEngFlagVisible={this.state.isEngFlagVisible}
          isItaFlagVisible={this.state.isItaFlagVisible}
          setWordPosition={this.setWordPosition} />
        <View style={styles.stats}>
          <Text>Score: {this.state.score} / {this.state.words.length + this.state.score}</Text>
          <Text>Time: {this.state.time} seconds</Text>
        </View>
        <Button
          style={styles.button}
          onPress={this.restartGame}
          title="Play"
          accessibilityLabel="Play the game" />
      </View>
    );
  }
}

class HelpScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageTitle}>English VS Italiano</Text>
        <Text>How to play: drag the English flag on top of English word that represent the image. Do the same with the Italian flag.</Text>
        <Text>Come giocare: trascina la bandiera Italiana sopra la parola corrispondente al disegno. Fai lo stesso con la bandiera Inglese.</Text>
      </View>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Game: GameScreen,
  Help: HelpScreen,
});

export default createAppContainer(TabNavigator);