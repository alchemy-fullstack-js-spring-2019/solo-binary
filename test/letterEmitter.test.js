const LetterEmitter = require('../lib/letterEmitter');

describe('Letter Emitter', ()=> {
    let letterEmitter = null;
    beforeEach(()=> {
        letterEmitter = new LetterEmitter;
    });

    it('takes a string and emits and event for every letter in string', done => {
        const str = "cool string";
        const letterMock = jest.fn();

        letterEmitter.on('letter', letterMock);

        letterEmitter.on('end'. () => {
            expect(letterMock).to
        })
    } )
});
