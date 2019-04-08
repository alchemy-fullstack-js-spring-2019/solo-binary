const EventEmitter = require('events');

// const ee = new EventEmitter();

// ee.on('letter', data => {
//   console.log(`RECIEVED: ${data}`);
// }); 

// const string = 'I like to ride my bicycle!';

// string.split('').forEach(letter => {
//   if(letter !== ' ') {
//     ee.emit('letter', letter);
//   }
// });

class LetterEmitter extends EventEmitter {
  constructor() {
    super();
  }

  read(string, callback) {
    const stringArray = string.split('');
    for(let i = 0; i < stringArray.length; i++) {
      this.emit('letter emitter', { letter: stringArray[i], offset: i })
    }
    callback();
    this.emit('end');
  }
}

module.exports = LetterEmitter;