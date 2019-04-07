const { LetterEmitter } = require('../lib/LetterEmitter.js');

describe('LetterEmitter class', () => {
    let TestLetterEmitter = null;
    beforeEach(() => {
        TestLetterEmitter = new LetterEmitter;
    });

    it('splits a string and emits an event for each letter', done => {
        const str = 'Hey there';
        const pattern = /[a-z]/i;
        const mockEmitter = jest.fn();
        TestLetterEmitter.on('letter', mockEmitter);

        TestLetterEmitter.once('end', () => {
            expect(mockEmitter).toHaveBeenCalledTimes(str.length);
            [...str].forEach((letter, offset) => {
                if(pattern.test(letter)) {
                    expect(mockEmitter).toHaveBeenCalledWith({
                        letter,
                        offset
                    });
                }
            });
            done();
        });

        TestLetterEmitter.read(str);
    });
});
