const { LetterEmitter } = require('./LetterEmitter');

describe('LetterEmitter', () => {
  let le = null;
  beforeEach(() => {
    le = new LetterEmitter;
  });

  it('splits string and emits an event for each letter', () => {
    let string = 'banana';
    let counts = 0;
    le.read(string);
    le.on('letterFound', (data) => {
      counts++;
      console.log(data);
      expect(counts).toEqual(6);
    });
  });

  it('splits string and emits an event for each letter', () => {
    let string = 'banana';
    let counts = 0;
    le.read(string);
    le.on('letterFound', (data) => {
      counts++;
      console.log(data, counts);
      expect(data).toEqual({ letter: 'a', offset: 1 });
    });
  });
});
