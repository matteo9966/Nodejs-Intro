const events = require('events');
const emitter = new events.EventEmitter();

emitter.on('started',(initial,end)=>process.stdout.write("valori inseriti: "+initial+" "+end));

setTimeout(()=>emitter.emit('started',10,50),2000);

