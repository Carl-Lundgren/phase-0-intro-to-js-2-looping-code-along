// Code your solutions in this file
const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts) {
    for (let i=0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

wrapGifts(gifts);

const names = ["Ada", "Brendan", "Ali"];
function writeCards(names, event) {
    const newCard = [];
    for (let i=0; i < names.length; i++) {
        newCard.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newCard;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}