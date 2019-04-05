const { EventEmitter } = require('events');

class LetterEmitter extends EventEmitter {
  constructor(){
    super();
  }
  read(word){
    [...word].forEach((letter) => {
      let i = 0;
      this.emit('letterFound', { letter: letter, offset: word[i] });
    });
  }
}

module.exports = { LetterEmitter };
