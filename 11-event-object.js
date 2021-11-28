
//questo è da aggiustare!!!

const eventEmitter = require("events").EventEmitter;  //eventEmitter è una classe da istanziare

class Person extends eventEmitter{
    constructor(name){
        super()
        this.name=name;
        console.log(this)
    }
}


let employee = new Person('giovanni')


employee.on('programmer',()=>{console.log(this)})


employee.emit('programmer');