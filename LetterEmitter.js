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
    // this.str = str;
    // this.read = function read(str) {
    //   let arrayed = str.split(', ');
    //   arrayed.forEach(ee.emit('{ letter: \'b\', offset: 20 }'));
    //   ee.on('{ letter: \'b\', offset: 20 }', element => {
    //     console.log(element);
    //   });
    //   ee.emit(end());
    // };  
  }  
};
