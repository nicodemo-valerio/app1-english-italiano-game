import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'space-evenly',
        paddingTop: 35
    },
    pageTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
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
        flex: 4,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        justifyContent: 'space-evenly',
        //backgroundColor: 'grey'
    },
    word: {
        textAlign: 'center',
        textAlignVertical: 'center',
        width: '25%',
        height: '20%',
        borderStyle: 'dotted',
        borderColor: 'grey',
        borderWidth: 0.3,
        borderRadius: 15
    },
    stats: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    helpScreen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        padding: 20
    }
});