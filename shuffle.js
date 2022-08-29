let cards = ["A", "B", "C", "D", "3", "6", "7", "H", "I", "J","2"];

shuffle(cards);

//console.log(cards);

cards.forEach(card => console.log(card));

function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex !== 0) {
        let randomIndex = Math.floor(Math.random() * array.length);
        currentIndex-=1;

        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }

    return array;
}