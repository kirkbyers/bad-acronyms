const { random } = require('faker');

function createBadAcronym(seedWord) {
    return seedWord.split('').map(letter => {
        const newWord = random.word();
        wordArray = newWord.split('');
        wordArray[0] = letter;
        return wordArray.join('');
    });
}

module.exports = {
    createBadAcronym
}
