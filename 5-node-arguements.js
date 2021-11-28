process.on('exit',()=>console.log("il processo è terminato"))

process.on('uncaughtException', function (err) {
    console.error('An uncaught error occurred!');
    console.error(err.stack);
  });


const arguements = process.argv.slice(2);
if(arguements.length<2){
    console.log()
    throw new Error("errrore non gestito!!!!")
    // process.exit(1)
}



const usernameFlag="--nome"
const nomeindex = arguements.indexOf(usernameFlag)+1

console.log("ciao: ",arguements[nomeindex]);