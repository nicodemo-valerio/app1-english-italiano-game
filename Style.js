import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
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
        justifyContent: 'space-evenly',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'red'
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