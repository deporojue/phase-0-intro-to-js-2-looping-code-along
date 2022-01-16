/*
for (let age=30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`)
}

const gifts = ["teddy bear", "drone", "doll"]

function wrapGifts(gifts) {
    for (let i=0; i<gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
}

wrapGifts(gifts);
*/


const thankyouCards = [];

function writeCards(names, event) {
    for (let i=0; i<names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        
        thankyouCards.push(message);
    }
return thankyouCards
}

/*
const group1 = ["Charlie", "Saimp", "Ali"]
const event1 = "birthday"

console.log(writeCards(group1,event1))
*/


function countDown(number) {
    while (number>=0) {
        console.log(number);
        number=number-1;
    }
}
