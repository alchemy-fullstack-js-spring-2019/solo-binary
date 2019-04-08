const { EventEmitter } = require('events');

//super = calls the constructor of what is extended

module.exports = class LetterEmitter extends EventEmitter {
    constructor() {
        super();
    }

    read(str) {
        const pattern = /[a-z]/i;
        //instead of letters you have str
        [...str].forEach((letter, offset) => {
            if(pattern.test(letter)) {
                //ee.emit you have emit as one of your this methods
                this.emit('letter', { letter, offset });
            }
        });

        this.emit('end');
    }
};
