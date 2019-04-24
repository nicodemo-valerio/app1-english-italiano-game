import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class WordToGuess extends React.Component {
  render() {
    return (
      <View style={styles.wordToGuess}>
        <Image source={require('./images/flag-eng.png')} />
        <Image
          source={require('./images/house.png')}
          style={styles.wordImage} />
        <Image source={require('./images/flag-ita.png')} />
      </View>
    )
  }
}

class WordList extends React.Component {
  render() {
    return (
      <View style={styles.wordList}>
        <Text style={styles.word}>Cane</Text>
        <Text style={styles.word}>Hand</Text>
        <Text style={styles.word}>Flag</Text>
        <Text style={styles.word}>Mano</Text>
        <Text style={styles.word}>Casa</Text>
        <Text style={styles.word}>Bandiera</Text>
        <Text style={styles.word}>House</Text>
        <Text style={styles.word}>Dog</Text>
      </View>
    )
  }
}

class Timer extends React.Component {
  render() {
    return (
      <Text>Time: 25 seconds</Text>
    )
  }
}

class Score extends React.Component {
  render() {
    return (
      <Text style={{ textAlign: 'center' }}>Score: 3/30</Text>
    )
  }
}

export default class App extends React.Component {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    margin: 10
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: '5%',
    paddingBottom: '5%'
  },
  wordToGuess: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  wordImage: {
    width: 64,
    height: 64,
    padding: 10
  },
  wordList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    justifyContent: 'space-evenly'
  },
  word: {
    padding: 5,
    textAlign: 'center',
    width: 72,
    height: 64,
    borderStyle: 'solid',
    borderColor: 'grey',
    borderWidth: 0.5
  },
  stats: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
});
