const { EventEmitter } = require('events');

class LetterEmitter extends EventEmitter {

    read(str) {
        str.split('');
        str.forEach(letter => {
            console.log(letter);
        });
    }
}
