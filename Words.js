export default class Word {
    words = [
        {
            eng: 'ambulance',
            ita: 'ambulanza',
            img: require('./images/ambulance.png')
        },
        {
            eng: 'apple',
            ita: 'mela',
            img: require('./images/apple.png')
        },
        {
            eng: 'soccer ball',
            ita: 'pallone',
            img: require('./images/soccerball.png')
        },
        {
            eng: 'bicycle',
            ita: 'bicicletta',
            img: require('./images/bicycle.png')
        },
        {
            eng: 'bank',
            ita: 'banca',
            img: require('./images/bank.png')
        },
        {
            eng: 'bread',
            ita: 'pane',
            img: require('./images/bread.png')
        },
        {
            eng: 'bee',
            ita: 'ape',
            img: require('./images/bee.png')
        },
        {
            eng: 'beer',
            ita: 'birra',
            img: require('./images/beer.png')
        },
        {
            eng: 'cake',
            ita: 'torta',
            img: require('./images/cake.png')
        },
        {
            eng: 'car',
            ita: 'automobile',
            img: require('./images/car.png')
        },
        {
            eng: 'carrot',
            ita: 'carota',
            img: require('./images/carrot.png')
        },
        {
            eng: 'cat',
            ita: 'gatto',
            img: require('./images/cat.png')
        },
        {
            eng: 'cheese',
            ita: 'formaggio',
            img: require('./images/cheese.png')
        },
        {
            eng: 'chicken',
            ita: 'gallina',
            img: require('./images/chicken.png')
        },
        {
            eng: 'chocolate',
            ita: 'cioccolato',
            img: require('./images/chocolate.png')
        },
        {
            eng: 'church',
            ita: 'chiesa',
            img: require('./images/church.png')
        },
        {
            eng: 'cloud',
            ita: 'nuvola',
            img: require('./images/cloud.png')
        },
        {
            eng: 'cookie',
            ita: 'biscotto',
            img: require('./images/cookie.png')
        },
        {
            eng: 'cow',
            ita: 'mucca',
            img: require('./images/cow.png')
        },
        {
            eng: 'cycler',
            ita: 'ciclista',
            img: require('./images/cycler.png')
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
            eng: 'fries',
            ita: 'patatine',
            img: require('./images/fries.png')
        },
        {
            eng: 'guitar',
            ita: 'chitarra',
            img: require('./images/guitar.png')
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
            eng: 'hospital',
            ita: 'ospedale',
            img: require('./images/hospital.png')
        },
        {
            eng: 'hotel',
            ita: 'albergo',
            img: require('./images/hotel.png')
        },
        {
            eng: 'house',
            ita: 'casa',
            img: require('./images/house.png')
        },
        {
            eng: 'lemon',
            ita: 'limone',
            img: require('./images/lemon.png')
        },
        {
            eng: 'mosque',
            ita: 'moschea',
            img: require('./images/mosque.png')
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
            eng: 'potato',
            ita: 'patata',
            img: require('./images/potato.png')
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
            eng: 'rice',
            ita: 'riso',
            img: require('./images/rice.png')
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
            eng: 'swimming',
            ita: 'nuotare',
            img: require('./images/swimming.png')
        },
        {
            eng: 'synagogue',
            ita: 'sinagoga',
            img: require('./images/synagogue.png')
        },
        {
            eng: 'tomato',
            ita: 'pomodoro',
            img: require('./images/tomato.png')
        },
        {
            eng: 'tree',
            ita: 'albero',
            img: require('./images/tree.png')
        },
        {
            eng: 'wine',
            ita: 'vino',
            img: require('./images/wine.png')
        },
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

    getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    getWords = (numberOfWords) => {
        const randomWords = [];
        let i = 0;
        for (i; i < numberOfWords; i++) {
            randomWords.push(this.words[this.getRandomInt(this.words.length)]);
        }
        return randomWords;
    }
}
