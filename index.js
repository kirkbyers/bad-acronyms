const { random } = require('faker');

function createBadAcronym(seedWord = 'loser') {
    return seedWord.split('').map(letter => {
        let word = ' ';
        while (word[0] != letter) {
            word = random.word();
            word = word.split(' ')[0];  // make sure its only one word
        }
        return word;
    });
}

module.exports = createBadAcronym;
