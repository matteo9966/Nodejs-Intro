const domande = ["come si chiama il server?","su quale porta?"];
const risposte = [];

process.on('exit',()=>process.stdout.write(risposte[0]+" "+risposte[1]))

process.stdin.on("data",(data)=>{
    risposte.push(data.toString().trim());
    if(risposte.length<domande.length){
        ask(risposte.length);
    }else{
        process.exit(0);
    }

})

// process.on("exit",()=>{
//    process.stdout.write("")
// })

function ask(i=0){
    process.stdout.write(`\n\n\n ${domande[i]}`);
    process.stdout.write(` > `);
}

ask()

// var questions = [
//     "What is your name?",
//     "What would you rather be doing?",
//     "What is your preferred programming language?"
//   ];
//   var answers = [];
//   function ask(i) {
//     process.stdout.write(`\n\n ${questions[i]}`);
//     process.stdout.write("  > ");
//   }
//   process.stdin.on('data', function(data) {
//     answers.push(data.toString().trim());
//     if (answers.length < questions.length) {
//       ask(answers.length);
//     } else {
//       process.exit();
//     }
//   });
//   process.on('exit', function() {
//     process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`);
//   });
//   ask(0);