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
    this.emit('end');
  }
  read2(word){
    [...word].forEach((letter, offset) => {
      this.emit('letterFound', {
        letter,
        offset 
      });
    });
    this.emit('end');
  }
}

module.exports = { LetterEmitter };
