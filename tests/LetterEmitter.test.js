const LetterEmitter = require('../lib/LetterEmitter');

describe('LetterEmitter', () => {
    let letterEmitter = null;
    beforeEach(() => {
        letterEmitter = new LetterEmitter();
    });
    it('splits a string and emits an event for each letter', done => {
        const str = 'megan';
        const letterMockHandler = jest.fn();
        letterEmitter.on('letter', letterMockHandler);
        letterEmitter.on('end', () => {
            expect(letterMockHandler).toHaveBeenCalledTimes(str.length);
            done();
        })
        letterEmitter.read(str)  
        });
    });
});
