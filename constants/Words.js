export default class Word {

    static shuffleArray = (array) => {
        let i = array.length - 1;
        let j = 0;
        for (i; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    static getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    static getWords = (numberOfWords) => {
        const randomWords = [];
        let i = 0;
        for (i; i < numberOfWords; i++) {
            randomWords.push(words[this.getRandomInt(words.length)]);
        }
        return randomWords;
    }
}

const words = [
    {
        eng: 'alarm clock',
        ita: 'sveglia',
        img: require('../assets/images/alarm-clock.png')
    },
    {
        eng: 'ambulance',
        ita: 'ambulanza',
        img: require('../assets/images/ambulance.png')
    },
    {
        eng: 'apple',
        ita: 'mela',
        img: require('../assets/images/apple.png')
    },
    {
        eng: 'bags',
        ita: 'borse',
        img: require('../assets/images/bags.png')
    },
    {
        eng: 'balloon',
        ita: 'palloncino',
        img: require('../assets/images/balloon.png')
    },
    {
        eng: 'bicycle',
        ita: 'bicicletta',
        img: require('../assets/images/bicycle.png')
    },
    {
        eng: 'book',
        ita: 'libro',
        img: require('../assets/images/book.png')
    },
    {
        eng: 'bank',
        ita: 'banca',
        img: require('../assets/images/bank.png')
    },
    {
        eng: 'basket',
        ita: 'cestino',
        img: require('../assets/images/basket.png')
    },
    {
        eng: 'bathtub',
        ita: 'vasca da bagno',
        img: require('../assets/images/bathtub.png')
    },
    {
        eng: 'battery',
        ita: 'batteria',
        img: require('../assets/images/battery.png')
    },
    {
        eng: 'beach',
        ita: 'spiaggia',
        img: require('../assets/images/beach.png')
    },
    {
        eng: 'bed',
        ita: 'letto',
        img: require('../assets/images/bed.png')
    },
    {
        eng: 'bee',
        ita: 'ape',
        img: require('../assets/images/bee.png')
    },
    {
        eng: 'bell',
        ita: 'campanello',
        img: require('../assets/images/bell.png')
    },
    {
        eng: 'beer',
        ita: 'birra',
        img: require('../assets/images/beer.png')
    },
    {
        eng: 'bread',
        ita: 'pane',
        img: require('../assets/images/bread.png')
    },
    {
        eng: 'brick',
        ita: 'mattone',
        img: require('../assets/images/brick.png')
    },
    {
        eng: 'broom',
        ita: 'scopa',
        img: require('../assets/images/broom.png')
    },
    {
        eng: 'camera',
        ita: 'fotocamera',
        img: require('../assets/images/camera.png')
    },
    {
        eng: 'camping',
        ita: 'campeggio',
        img: require('../assets/images/camping.png')
    },
    {
        eng: 'candle',
        ita: 'candela',
        img: require('../assets/images/candle.png')
    },
    {
        eng: 'cake',
        ita: 'torta',
        img: require('../assets/images/cake.png')
    },
    {
        eng: 'car',
        ita: 'automobile',
        img: require('../assets/images/car.png')
    },
    {
        eng: 'carrot',
        ita: 'carota',
        img: require('../assets/images/carrot.png')
    },
    {
        eng: 'cat',
        ita: 'gatto',
        img: require('../assets/images/cat.png')
    },
    {
        eng: 'cellphone',
        ita: 'cellulare',
        img: require('../assets/images/cellphone.png')
    },
    {
        eng: 'cheese',
        ita: 'formaggio',
        img: require('../assets/images/cheese.png')
    },
    {
        eng: 'chicken',
        ita: 'gallina',
        img: require('../assets/images/chicken.png')
    },
    {
        eng: 'chocolate',
        ita: 'cioccolato',
        img: require('../assets/images/chocolate.png')
    },
    {
        eng: 'church',
        ita: 'chiesa',
        img: require('../assets/images/church.png')
    },
    {
        eng: 'cigarette',
        ita: 'sigaretta',
        img: require('../assets/images/cigarette.png')
    },
    {
        eng: 'cloud',
        ita: 'nuvola',
        img: require('../assets/images/cloud.png')
    },
    {
        eng: 'cookie',
        ita: 'biscotto',
        img: require('../assets/images/cookie.png')
    },
    {
        eng: 'cow',
        ita: 'mucca',
        img: require('../assets/images/cow.png')
    },
    {
        eng: 'crayon',
        ita: 'pastello',
        img: require('../assets/images/crayon.png')
    },
    {
        eng: 'credit card',
        ita: 'carta di credito',
        img: require('../assets/images/credit-card.png')
    },
    {
        eng: 'cycler',
        ita: 'ciclista',
        img: require('../assets/images/cycler.png')
    },
    {
        eng: 'fire',
        ita: 'fuoco',
        img: require('../assets/images/fire.png')
    },
    {
        eng: 'dog',
        ita: 'cane',
        img: require('../assets/images/dog.png')
    },
    {
        eng: 'door',
        ita: 'porta',
        img: require('../assets/images/door.png')
    },
    {
        eng: 'envelope',
        ita: 'busta',
        img: require('../assets/images/envelope.png')
    },
    {
        eng: 'fish',
        ita: 'pesce',
        img: require('../assets/images/fish.png')
    },
    {
        eng: 'flower',
        ita: 'fiore',
        img: require('../assets/images/flower.png')
    },
    {
        eng: 'fries',
        ita: 'patatine',
        img: require('../assets/images/fries.png')
    },
    {
        eng: 'gift',
        ita: 'regalo',
        img: require('../assets/images/gift.png')
    },
    {
        eng: 'guitar',
        ita: 'chitarra',
        img: require('../assets/images/guitar.png')
    },
    {
        eng: 'hammer',
        ita: 'martello',
        img: require('../assets/images/hammer.png')
    },
    {
        eng: 'hand',
        ita: 'mano',
        img: require('../assets/images/hand.png')
    },
    {
        eng: 'horse',
        ita: 'cavallo',
        img: require('../assets/images/horse.png')
    },
    {
        eng: 'hospital',
        ita: 'ospedale',
        img: require('../assets/images/hospital.png')
    },
    {
        eng: 'hotel',
        ita: 'albergo',
        img: require('../assets/images/hotel.png')
    },
    {
        eng: 'house',
        ita: 'casa',
        img: require('../assets/images/house.png')
    },
    {
        eng: 'key',
        ita: 'chiave',
        img: require('../assets/images/key.png')
    },
    {
        eng: 'knife',
        ita: 'coltello',
        img: require('../assets/images/knife.png')
    },
    {
        eng: 'laptop',
        ita: 'portatile',
        img: require('../assets/images/laptop.png')
    },
    {
        eng: 'lemon',
        ita: 'limone',
        img: require('../assets/images/lemon.png')
    },
    {
        eng: 'light bulb',
        ita: 'lampadina',
        img: require('../assets/images/light-bulb.png')
    },
    {
        eng: 'lock',
        ita: 'lucchetto',
        img: require('../assets/images/lock.png')
    },
    {
        eng: 'luggage/baggage',
        ita: 'bagaglio',
        img: require('../assets/images/luggage.png')
    },
    {
        eng: 'mail',
        ita: 'posta',
        img: require('../assets/images/mail.png')
    },
    {
        eng: 'map',
        ita: 'mappa',
        img: require('../assets/images/map.png')
    },
    {
        eng: 'money',
        ita: 'soldi',
        img: require('../assets/images/money.png')
    },
    {
        eng: 'mosque',
        ita: 'moschea',
        img: require('../assets/images/mosque.png')
    },
    {
        eng: 'mountain',
        ita: 'montagna',
        img: require('../assets/images/mountain.png')
    },
    {
        eng: 'mouse',
        ita: 'topo',
        img: require('../assets/images/mouse.png')
    },
    {
        eng: 'mushroom',
        ita: 'fungo',
        img: require('../assets/images/mushroom.png')
    },
    {
        eng: 'notebook',
        ita: 'taccuino',
        img: require('../assets/images/notebook.png')
    },
    {
        eng: 'package',
        ita: 'pacco',
        img: require('../assets/images/package.png')
    },
    {
        eng: 'painting',
        ita: 'quadro',
        img: require('../assets/images/painting.png')
    },
    {
        eng: 'paperclip',
        ita: 'graffetta',
        img: require('../assets/images/paperclip.png')
    },
    {
        eng: 'pen',
        ita: 'penna',
        img: require('../assets/images/pen.png')
    },
    {
        eng: 'pencil',
        ita: 'matita',
        img: require('../assets/images/pencil.png')
    },
    {
        eng: 'pig',
        ita: 'maiale',
        img: require('../assets/images/pig.png')
    },
    {
        eng: 'pill',
        ita: 'pillola',
        img: require('../assets/images/pill.png')
    },
    {
        eng: 'pistol/gun',
        ita: 'pistola',
        img: require('../assets/images/pistol.png')
    },
    {
        eng: 'plug',
        ita: 'spina',
        img: require('../assets/images/plug.png')
    },
    {
        eng: 'potato',
        ita: 'patata',
        img: require('../assets/images/potato.png')
    },
    {
        eng: 'rabbit',
        ita: 'coniglio',
        img: require('../assets/images/rabbit.png')
    },
    {
        eng: 'rainbow',
        ita: 'arcobaleno',
        img: require('../assets/images/rainbow.png')
    },
    {
        eng: 'rice',
        ita: 'riso',
        img: require('../assets/images/rice.png')
    },
    {
        eng: 'ruler',
        ita: 'righello',
        img: require('../assets/images/ruler.png')
    },
    {
        eng: 'sandwich',
        ita: 'panino',
        img: require('../assets/images/sandwich.png')
    },
    {
        eng: 'scale',
        ita: 'bilancia',
        img: require('../assets/images/scale.png')
    },
    {
        eng: 'school',
        ita: 'scuola',
        img: require('../assets/images/school.png')
    },
    {
        eng: 'scissors',
        ita: 'forbici',
        img: require('../assets/images/scissors.png')
    },
    {
        eng: 'shower',
        ita: 'doccia',
        img: require('../assets/images/shower.png')
    },
    {
        eng: 'snake',
        ita: 'serpente',
        img: require('../assets/images/snake.png')
    },
    {
        eng: 'soap',
        ita: 'sapone',
        img: require('../assets/images/soap.png')
    },
    {
        eng: 'soccer ball',
        ita: 'pallone',
        img: require('../assets/images/soccer-ball.png')
    },
    {
        eng: 'spider',
        ita: 'ragno',
        img: require('../assets/images/spider.png')
    },
    {
        eng: 'sponge',
        ita: 'spugna',
        img: require('../assets/images/sponge.png')
    },
    {
        eng: 'stadium',
        ita: 'stadio',
        img: require('../assets/images/stadium.png')
    },
    {
        eng: 'strawberry',
        ita: 'fragola',
        img: require('../assets/images/strawberry.png')
    },
    {
        eng: 'sun',
        ita: 'sole',
        img: require('../assets/images/sun.png')
    },
    {
        eng: 'sunflower',
        ita: 'girasole',
        img: require('../assets/images/sunflower.png')
    },
    {
        eng: 'swimming',
        ita: 'nuotare',
        img: require('../assets/images/swimming.png')
    },
    {
        eng: 'synagogue',
        ita: 'sinagoga',
        img: require('../assets/images/synagogue.png')
    },
    {
        eng: 'television',
        ita: 'televisione',
        img: require('../assets/images/television.png')
    },
    {
        eng: 'tent',
        ita: 'tenda',
        img: require('../assets/images/tent.png')
    },
    {
        eng: 'thermometer',
        ita: 'termometro',
        img: require('../assets/images/thermometer.png')
    },
    {
        eng: 'toilet',
        ita: 'gabinetto',
        img: require('../assets/images/toilet.png')
    },
    {
        eng: 'toilet paper',
        ita: 'carta igienica',
        img: require('../assets/images/toilet-paper.png')
    },
    {
        eng: 'tomato',
        ita: 'pomodoro',
        img: require('../assets/images/tomato.png')
    },
    {
        eng: 'train',
        ita: 'treno',
        img: require('../assets/images/train.png')
    },
    {
        eng: 'tree',
        ita: 'albero',
        img: require('../assets/images/tree.png')
    },
    {
        eng: 'umbrella on ground',
        ita: 'ombrellone',
        img: require('../assets/images/umbrella-on-ground.png')
    },
    {
        eng: 'wastebasket',
        ita: 'cestino',
        img: require('../assets/images/wastebasket.png')
    },
    {
        eng: 'watch',
        ita: 'orologio',
        img: require('../assets/images/watch.png')
    },
    {
        eng: 'wine',
        ita: 'vino',
        img: require('../assets/images/wine.png')
    },
    {
        eng: 'wrench',
        ita: 'chiave inglese',
        img: require('../assets/images/wrench.png')
    }
];