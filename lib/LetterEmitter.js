const EventEmitter = require('events');

class LetterEmitter extends EventEmitter {
  constructor() {
    super();
  }
  
  read(string) {
    [...string].forEach(letter => {
      this.emit('letter', letter);
    });
  
    this.emit('end');
  }

}

module.exports = {
  LetterEmitter
};
