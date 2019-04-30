export default class Word {
    words = [
        {
            eng: 'bicycle',
            ita: 'bicicletta',
            img: require('./images/bicycle.png')
        },
        {
            eng: 'bread',
            ita: 'pane',
            img: require('./images/bread.png')
        },
        {
            eng: 'cat',
            ita: 'gatto',
            img: require('./images/cat.png')
        },
        {
            eng: 'cow',
            ita: 'mucca',
            img: require('./images/cow.png')
        },
        {
            eng: 'dog',
            ita: 'cane',
            img: require('./images/dog.png')
        },
        {
            eng: 'fish',
            ita: 'pesce',
            img: require('./images/fish.png')
        },
        {
            eng: 'hand',
            ita: 'mano',
            img: require('./images/hand.png')
        },
        {
            eng: 'house',
            ita: 'casa',
            img: require('./images/house.png')
        },
        {
            eng: 'phone',
            ita: 'telefono',
            img: require('./images/phone.png')
        },
        {
            eng: 'sandwich',
            ita: 'panino',
            img: require('./images/sandwich.png')
        },
        {
            eng: 'sun',
            ita: 'sole',
            img: require('./images/sun.png')
        }
    ];

    shuffleArray = (array) => {
        let i = array.length - 1;
        let j = 0;
        let temp = null;
        for (i; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    getWords = () => {
        const shuffleWords = this.shuffleArray(this.words);
        return shuffleWords;
    }
}
