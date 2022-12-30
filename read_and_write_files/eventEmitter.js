const logEvents = require('../logEvents');
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};
const myEmitter = new MyEmitter();

// add listener for the log event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
  myEmitter.emit('log', 'Logged event from the event emitter');
  // myEmitter.emit('log', 'Log event emitted', ++more params here);
}, 2000);