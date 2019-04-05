const EventEmitter = require('events');

class LetterEmitter extends EventEmitter {
  constructor() {
    // super allows you to use stuff within EventEmitter class
    super();
  }
  
  read(string) {
    // add something.split() then forEach
    [...string].forEach(letter => {
      this.emit('letter', letter);
    });
    // 
  }


}

module.exports = {
  LetterEmitter
};
