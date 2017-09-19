const createBadAcronym = require('./index');

const seedWord = process.argv[2] || 'acronym';
const acronym = createBadAcronym(seedWord);
console.log(seedWord + ':\n\n' + acronym.join('\n'));