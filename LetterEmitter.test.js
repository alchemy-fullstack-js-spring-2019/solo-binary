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
    le.read(string);
    le.on('letterFound', (data) => {
      const dataReturn = [];
      dataReturn.push(data);
      expect(dataReturn).toEqual([
        { letter: 'b', offset: 0 },
        { letter: 'a', offset: 1 },
        { letter: 'n', offset: 2 },
        { letter: 'a', offset: 3 },
        { letter: 'n', offset: 4 },
        { letter: 'a', offset: 5 }
      ]);
    });
  });
});
