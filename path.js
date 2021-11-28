const path = require('path');

const nomeimg= 'immagineprofilo'

const pathcreato=path.join(__dirname,nomeimg+'.png');

console.log(pathcreato)

const base = path.basename(pathcreato)
console.log(base)

const nomedelfile = path.basename(__filename);

console.log(nomedelfile)
