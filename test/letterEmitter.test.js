const LetterEmitter = require('../lib/letterEmitter');

describe('Letter Emitter', ()=> { 
    let letterEmitter = null;
    beforeEach(()=> {
        letterEmitter = new LetterEmitter();
    });

    it('takes a string and emits and event for every letter in string', done => {
        const str = 'cool String!';
        const pattern = /[a-z]/i;
        const letterMock = jest.fn();

        letterEmitter.on('letter', letterMock);

        letterEmitter.once('end', () => {
            expect(letterMock).toHaveBeenCalledTimes(10);
            [...str].forEach((letter, offset) => {
                if(pattern.test(letter)) {
                    expect(letterMock).toHaveBeenCalledWith({ letter, offset });
                }
            });
            done();
        });
        letterEmitter.read(str);
    });
});
