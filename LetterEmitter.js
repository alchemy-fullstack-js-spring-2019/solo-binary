const { EventEmitter } = require('events');

class LetterEmitter extends EventEmitter {
  constructor(){
    super();
  }
  read(string){
    [...string].forEach((letter) => {
      this.emit('letterFound', letter);
    });
  }
}

module.exports = { LetterEmitter };
