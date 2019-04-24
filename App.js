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
    this.state = { score: 0 };
  }

  render() {
    return (
      <Text style={{ textAlign: 'center' }}>Score: {this.state.score}</Text>
    )
  }
}

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      wordsToGuess: [],
      flagEngPosition: { x: 0, y: 0 },
      flagItaPosition: { x: 0, y: 0 },
      wordEngPosition: { x: 0, y: 0 },
      wordItaPosition: { x: 0, y: 0 }
    }
  }

  componentWillMount() {
    this.setState({ wordsToGuess: words });
    console.log(this.state.wordsToGuess);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.pageTitle}>English VS Italiano</Text>
        </View>
        <WordToGuess />
        <WordList />
        <View style={styles.stats}>
          <Score />
          <Timer />
        </View>
      </View>
    );
  }
}
