import React from 'react';
import { Button, Text, View, Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import styles from './Style.js';
import Words from './constants/Words.js';
import WordsContainer from './components/WordsContainer';

const WORDNUMBER = 7;

class GameScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      words: [],
      wordList: [],
      currentWord: null,
      wordsGrid: { x: 0, y: 0 },
      wordPosition: {
        eng: { x: 0, y: 0 },
        ita: { x: 0, y: 0 }
      },
      isFlagVisible: {
        eng: true,
        ita: true
      },
      score: 0,
      time: 0
    }
    this.updateTime = null;
  }

  // Fetch data from array, reset score, start timer
  restartGame = () => {
    const words = Words.getWords(WORDNUMBER);

    let wordList = words.map(w => w.eng);
    wordList = wordList.concat(words.map(w => w.ita));
    wordList = Words.shuffleArray(wordList);

    const currentWord = words[0];
    this.setState({
      words,
      wordList,
      currentWord,
      isFlagVisible: {
        eng: true,
        ita: true
      },
      score: 0,
      time: 0
    });

    this.updateTime = setInterval(() => {
      this.setState({ time: this.state.time + 1 })
    }, 1000);
  }

  // Check if the flag position overlap the position of the word
  checkPosition = (moveX, moveY, wordPosition) => {
    if (moveX > wordPosition.x &&
      moveX < wordPosition.x + wordPosition.width &&
      moveY > wordPosition.y &&
      moveY < wordPosition.y + wordPosition.height) return true;
    return false;
  }

  // Update state when a word (eng and ita) is guessed
  updateLists = (wordToDelete) => {
    const words = this.state.words.filter(word => word !== wordToDelete);
    //game over
    if (words.length === 0) {
      const finalState = this.state;
      finalState.words = words;

      // For layout
      finalState.currentWord = { eng: 'You win!', ita: 'Hai vinto!', img: require('./assets/images/win.png') }
      finalState.wordList = ['You win!', 'Hai vinto!'];
      finalState.isFlagVisible = {
        eng: true,
        ita: true
      };
      finalState.score += 1;
      clearInterval(this.updateTime);
      this.setState(finalState);
    } else {
      // Remove guessed word from the list
      let wordList = this.state.wordList.filter(word => (word !== wordToDelete.eng && word !== wordToDelete.ita));

      // Shuffle remaining words to display
      wordList = Words.shuffleArray(wordList);
      const currentWord = words[0];
      const score = this.state.score + 1;
      this.setState({
        words,
        wordList,
        currentWord,
        isFlagVisible: {
          eng: true,
          ita: true
        },
        score
      });
    }
  }

  // Update flag position 
  updateFlagPosition = (lang, moveX, moveY) => {
    if (this.checkPosition(moveX, moveY, this.state.wordPosition[lang])) {
      const isFlagVisible = this.state.isFlagVisible;
      isFlagVisible[lang] = false;
      this.setState({ isFlagVisible }, () => {
        if (!this.state.isFlagVisible['eng'] && !this.state.isFlagVisible['ita']) {
          const wordToDelete = this.state.currentWord;
          this.updateLists(wordToDelete);
        }
      });
    }
  }

  // Set screen position of the current word to be guessed
  setWordPosition = (lang, x, y, width, height) => {
    //set new position
    const newPosition = { x: x, y: y, width: width, height: height };

    //set container position WordsGrid and WordsContainer
    const newState = this.state;
    if (lang === 'eng' || lang === 'ita') {
      newState.wordPosition[lang] = newPosition;
      newState.wordPosition[lang].x += this.state.wordsGrid.x;
      newState.wordPosition[lang].y += this.state.wordsGrid.y;
    }

    //add container position to existing position in order to calculate the absolute position on the screen
    if (lang === null) {
      newState.wordsGrid.x += x;
      newState.wordsGrid.y += y;
      const wordEngPosition = this.state.wordPosition['eng'];
      wordEngPosition.x += newPosition.x;
      wordEngPosition.y += newPosition.y;
      const wordItaPosition = this.state.wordPosition['ita'];
      wordItaPosition.x += newPosition.x;
      wordItaPosition.y += newPosition.y;
      newState.wordPosition['eng'] = wordEngPosition;
      newState.wordPosition['ita'] = wordItaPosition;
    }

    this.setState(newState);
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
          isFlagVisible={this.state.isFlagVisible}
          setWordPosition={this.setWordPosition} />
        <View style={styles.stats}>
          <Text>Score {this.state.score} / {this.state.words.length + this.state.score}</Text>
          <Text>Time {Number.parseInt(this.state.time / 60)} min {this.state.time % 60} sec</Text>
        </View>
        <Button
          style={styles.button}
          onPress={this.restartGame}
          title="Start"
          accessibilityLabel="Play the game" />
      </View>
    );
  }
}

class HelpScreen extends React.Component {
  render() {
    return (
      <View style={styles.helpScreen}>
        <Text style={styles.pageTitle}>English • Italiano</Text>
        <Image source={require('./assets/images/flag-eng.png')} />
        <Text>How to play: drag the English flag on top of English word that represent the image. Do the same with the Italian flag.</Text>
        <Text>Click on "Start" to start the game or restart if you are still playing.</Text>
        <Image source={require('./assets/images/flag-ita.png')} />
        <Text style={{ textAlign: 'left' }}>Come giocare: trascina la bandiera Italiana sopra la parola corrispondente al disegno. Fai lo stesso con la bandiera Inglese.</Text>
        <Text>Clicca su "Start" per iniziare a giocare o ricominciare durante una partita in corso.</Text>
      </View>
    )
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Play: GameScreen,
    Help: HelpScreen
  },
  {
    initialRouteName: 'Help',
    tabBarOptions: {
      labelStyle: {
        fontSize: 15
      },
      style: { paddingBottom: 5 }
    }
  }
);

export default createAppContainer(TabNavigator);