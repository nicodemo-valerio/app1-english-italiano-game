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
            eng: 'chicken',
            ita: 'gallina',
            img: require('./images/chicken.png')
        },
        {
            eng: 'cloud',
            ita: 'nuvola',
            img: require('./images/cloud.png')
        },
        {
            eng: 'cow',
            ita: 'mucca',
            img: require('./images/cow.png')
        },
        {
            eng: 'fire',
            ita: 'fuoco',
            img: require('./images/fire.png')
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
            eng: 'flower',
            ita: 'fiore',
            img: require('./images/flower.png')
        },
        {
            eng: 'hand',
            ita: 'mano',
            img: require('./images/hand.png')
        },
        {
            eng: 'horse',
            ita: 'cavallo',
            img: require('./images/horse.png')
        },
        {
            eng: 'house',
            ita: 'casa',
            img: require('./images/house.png')
        },
        {
            eng: 'mouse',
            ita: 'topo',
            img: require('./images/mouse.png')
        },
        {
            eng: 'mushroom',
            ita: 'fungo',
            img: require('./images/mushroom.png')
        },
        {
            eng: 'phone',
            ita: 'telefono',
            img: require('./images/phone.png')
        },
        {
            eng: 'pig',
            ita: 'maiale',
            img: require('./images/pig.png')
        },
        {
            eng: 'rabbit',
            ita: 'coniglio',
            img: require('./images/rabbit.png')
        },
        {
            eng: 'rainbow',
            ita: 'arcobaleno',
            img: require('./images/rainbow.png')
        },
        {
            eng: 'sandwich',
            ita: 'panino',
            img: require('./images/sandwich.png')
        },
        {
            eng: 'snake',
            ita: 'serpente',
            img: require('./images/snake.png')
        },
        {
            eng: 'spider',
            ita: 'ragno',
            img: require('./images/spider.png')
        },
        {
            eng: 'sun',
            ita: 'sole',
            img: require('./images/sun.png')
        },
        {
            eng: 'sunflower',
            ita: 'girasole',
            img: require('./images/sunflower.png')
        },
        {
            eng: 'tree',
            ita: 'albero',
            img: require('./images/tree.png')
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
        return shuffleWords.slice(0, 8);
    }
}
