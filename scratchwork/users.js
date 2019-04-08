const { UserList } = require('../scratchwork/events-demo.js');

const user = new UserList;
let id = 1;
user.on('saved-user', function(user) {
    console.log('saved: ' + user.name + ' ' + user.uid + ' ' + user.occupation);
});

setInterval(() => {
    user.save({ uid: id++, name: 'Jane Doe', occupation: 'manager' });
    user.save({ uid: id++, name: 'Blah blah', occupation: 'blah' });
    user.all();
}, 1000);
