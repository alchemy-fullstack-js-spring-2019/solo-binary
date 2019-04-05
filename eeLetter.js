const EventEmitter = require('events');

const ee = new EventEmitter();

// ee.on('letter', () => {
//   console.log('RECEIVED: ${letter}');
// });

// const aString = 'a red car';
// const anArray = aString.split(', ');
// anArray.forEach(ee.emit());

function Data(courseName, teacher, tuition) {
  this.courseName = courseName;
  this.teacher = teacher;
  this.tuition = tuition;
}

const data = [
  new Data('JSClass2', 'Joe Teacher', 0),
  new Data('ECMA6', 'Some Teacher', 1000)
];

ee.on(data => {
  console.log(`received: ${data.tuition}`);
});

const aString = 'a red car';
const anArray = aString.split(', ');
anArray.forEach(ee.emit());

