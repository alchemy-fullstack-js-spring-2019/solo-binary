const { EventEmitter } = require('events');

module.exports = class LetterEmitter extends EventEmitter {
  constructor() {
    super();
  }
  read(str) {
    [...str].forEach((letter, offset) => {
      this.emit('letter', {
        letter,
        offset
      });
    });
    this.emit('end');
    
    this.str = str;
    this.read = function read(str) {
      let arrayed = str.split(', ');
      arrayed.forEach(this.emit('{ letter: \'b\', offset: 20 }'), () => {
        this.once('{ letter: \'b\', offset: 20 }', element => {
          console.log(element);
        });
      });
      this.emit('end');
    };  
  }  
};
