process.stdout.write("avviare il contatore")
let time=0;
const waittime=10000
const spinner=["|","/","-","\\","|","/","-","\\"];
let animationFrame=0;
let intervalId;
function frameEval(){
    if(animationFrame===spinner.length){
        animationFrame=0
    }
}

function spinnerAnimation(){

    let frame= spinner[animationFrame]
    animationFrame+=1;
    frameEval();
    return frame

}

function loadingSpinner(){
    intervalId= setInterval(()=>{
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        process.stdout.write(spinnerAnimation())
    },500)
}

setTimeout(()=>{clearInterval(intervalId);process.exit(0)},waittime)

process.stdin.on('data',()=>{
    console.log("avvio il contatore")
    loadingSpinner();
    // process.exit(0)
})
