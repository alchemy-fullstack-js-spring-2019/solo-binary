const { LetterEmitter } = require('./LetterEmitter');

describe('LetterEmitter', () => {

  it('splits string and emits an event for each letter', () => {
    const le = new LetterEmitter;
    let string = 'banana';
    let counts = 0;
    le.read(string);
    le.on('letterFound', (letter) => {
      counts++;
      console.log(letter);
      expect(counts).toEqual(6);
    });
  });
});
