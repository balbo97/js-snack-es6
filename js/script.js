// SNAK-1 --------------->>>

// CREO UN ARRAY DI BICI 
const bikes = [
    {
        nome : 'bici1',
        peso : 20
    },
    {
        nome : 'bici2',
        peso : 30
    },
    {
        nome : 'bici3',
        peso : 40
    },
    {
        nome : 'bici4',
        peso : 50
    },
    {
        nome : 'bici5',
        peso : 60
    }
]

// CREO UN ARRAY VUOTO
let peso_bici = [];

// faccio ciclare gli elementi dell array bikes 
bikes.forEach((elem)=>{
    
    // utilizzo il destructuring per determinare la costante peso 
    let {peso} = elem;

    // pusho i pesi nell'array vuoto creato in precedenza 
    peso_bici.push(peso)
    
})
console.log(peso_bici)

// utilizzo la funxione Math.min per determinare il più piccolo dei valori nell'array
let smallest_number = Math.min(...peso_bici)
console.log(smallest_number)


// SNACK-2 ----------------------->>

// CREO UNA FUNZIONE CHE MI GENERI NUMERI RANDOM 
function create_number(){
    return Math.floor(Math.random()*100)+1;
}

// CREO UN ARRAY DI SQUADRE DI CALCIO 
const soccer_team = [
    {
        nome : 'Juventus',
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : 'Roma',
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : 'Milan',
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : 'Inter',
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : 'Napoli',
        puntiFatti : 0,
        falliSubiti : 0
    },
]

// CREO UN NUOVO ARRAY VUOTO 
let array =[];

// FACCIO UN CICLO FOR EACH 
soccer_team.forEach((elem)=>{

    // genero ed inserisco il numero casuale negli objs
    elem.falliSubiti = create_number();
    elem.puntiFatti = create_number();

    // utilizzo il destructuring per determinare le variabili nome e falli subiti
    let {nome, falliSubiti} = elem;

    // pusho nel nuovo array gli oggetti conteneti le due variabili determinate 
    array.push({nome, falliSubiti});  
})

console.log(soccer_team);
console.log(array);


// SNACK-3 -------------------------->>

// CREO UN ARRAI DI OGGETTI 
let fashion_items = [
    {
        nome : 'Poppy',
        type : 'tshirt',
        color : 'red'
    },
    {
        nome : 'Jumping',
        type : 'occhiali',
        color : 'blue'
    },
    {
        nome : 'CrissCross',
        type : 'scarpe',
        color : 'black'
    },
    {
        nome : 'Jenny',
        type : 'borsa',
        color : 'pink'
    }
]

// CREO UNA FUNZIONE CHE MI GENERI UNA LETTERA CASUALE DELL'ALFABETO 
function generateLetter(){

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

    return randomLetter;
}

// CREO UN NUOVO ARRAY 
let new_fashionItems = [];

// FACCIO UN CICLO FOR EACH 
fashion_items.forEach((elem)=>{

    // aggiungo position con valore random lettera al singolo oggetto 
    elem.position = generateLetter();

    // prendo ogni elemento dall oggetto 
    let {nome, type, color, position} = elem;

    // lo pusho nel nuovo array 
    new_fashionItems.push({nome, type, color, position});
})

console.log(fashion_items)

console.log(new_fashionItems)


