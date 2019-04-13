const EventEmitter = require('events');

const ee = new EventEmitter();

function Data(courseName, teacher, tuition) {
  this.courseName = courseName;
  this.teacher = teacher;
  this.tuition = tuition;
}

const data = [
  new Data('JSClass2', 'Joe Teacher', 0),
  new Data('ECMA6', 'Some Teacher', 1000)
];

ee.on('we did it with data', data => {
  console.log(data);
});

ee.emit('we did it with data', data);
