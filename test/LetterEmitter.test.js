const { LetterEmitter } = require('../lib/LetterEmitter.js');

describe('LetterEmitter class', () => {
    let TestLetterEmitter = null;
    beforeEach(() => {
        TestLetterEmitter = new LetterEmitter;
    });
    it('splits a string and emits an event for each letter', done => {
        const str = 'Hey there';
        const mockEmitter = jest.fn();
        TestLetterEmitter.on('letter', mockEmitter);
        TestLetterEmitter.on('end', () => {
            expect(mockEmitter).toHaveBeenCalledTime(str.length);
            [...str].forEach((letter, offset) => {
                expect(mockEmitter).toHaveBeenCalledWith({
                    letter,
                    offset
                });
            });
        });
        done();
    });


});

// const LetterEmitter = require('./LetterEmitter');

// describe('LetterEmitter', () => {
//   let letterEmitter = null;
//   beforeEach(() => {
//     letterEmitter = new LetterEmitter();
//   });

//   it('splits a string and emits an event for each letter', done => {
//     const str = 'hi There!';
//     const pattern = /[a-z]/i;
//     const letterMockHandler = jest.fn();

//     letterEmitter.on('letter', letterMockHandler);

//     // { letter: 'h', offset: 0 }
//     // { letter: 'i', offset: 1 }
//     letterEmitter.once('end', () => {
//       expect(letterMockHandler).toHaveBeenCalledTimes(7);
//       [...str].forEach((letter, offset) => {
//         if(pattern.test(letter)) {
//           expect(letterMockHandler).toHaveBeenCalledWith({
//             letter,
//             offset
//           });
//         }
//       });
//       done();
//     });

//     letterEmitter.read(str);
//   });
// });
