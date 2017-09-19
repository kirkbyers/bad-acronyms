const assert = require('assert');

const { createBadAcronym } = require('../index');

describe('createBadAcronym', () => {
    it('Should create a bad acronym for a given word', () => {
        const seedWord = 'LOSER';
        const badAcronym = createBadAcronym(seedWord);
        badAcronym.forEach((word, index) => {
            assert.equal(true, word[0] === seedWord[index]);
        })
    });
})