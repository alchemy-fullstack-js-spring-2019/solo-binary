const { EventEmitter } = require('events');

class LetterEmitter extends EventEmitter {
    constructor() {
        super();
    }

    read(str) {
        [...str].forEach((letter, i) => {
            this.emit('boop', { letter: letter, offset: i });
        });
        this.emit('end');
    }
}

module.exports = LetterEmitter;
