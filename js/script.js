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
    console.log(peso)

    // pusho i pesi nell'array vuoto creato in precedenza 
    peso_bici.push(peso)
    
})
console.log(peso_bici)

// utilizzo la funxione Math.min per determinare il più piccolo dei valori nell'array
let smallest_number = Math.min(...peso_bici)
console.log(smallest_number)