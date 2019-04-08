const { EventEmitter } = require('events');

//super = calls the constructor of what is extended

module.exports = class LetterEmitter extends EventEmitter {
    constructor() {
        super();
    }

    read(str) {
        //instead of letters you have str
        str.forEach(letter => {
            //ee.emit you have emit as one of your this methods
            this.emit('letter', letter);
        });

        this.emit('end');
    }
};
