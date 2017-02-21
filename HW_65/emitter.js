const events = require('events'),
    eventEmitter = new events.EventEmitter();

//eventEmitter.setMaxListeners(500);

eventEmitter.on('second', (emit) => {
    console.log(emit);
});

setInterval(function() {
    eventEmitter.emit('second', new Date().toLocaleTimeString());
},1000);

//readFile();
