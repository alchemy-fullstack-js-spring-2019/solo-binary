const LetterEmitter = require('../lib/LetterEmitter');


describe('Letter Emitter tests', () => {
    let letterEmitter;
    beforeEach(() => {
        letterEmitter = new LetterEmitter();
    });
    it('splits a string and emits an event for each letter', done => {
        const message = 'hello there';
        let counter = jest.fn();
        letterEmitter.on('boop', counter);
        letterEmitter.once('end', () => {
            expect(counter).toHaveBeenCalledTimes(message.length);
            [...message].forEach((letter, i) => {
                expect(counter).toHaveBeenCalledWith({ letter: letter, offset: i });
            });
            done();
        });
        letterEmitter.read(message);
    });
});
