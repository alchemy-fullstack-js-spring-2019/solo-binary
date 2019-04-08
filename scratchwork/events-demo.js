const { EventEmitter } = require('events');

let id = 1;
let database = {
    users: [
        { uid: id++, name: 'John Doe', occupation: 'fireman' },
        { uid: id++, name: 'Jane Cleary', occupation: 'police' },
        { uid: id++, name: 'Dukes McHazard', occupation: 'doctor' }
    ]
};

class UserList extends EventEmitter {
    constructor() {
        super();
    }

    save(obj) {
        this.uid = id++;
        database.users.push(obj);
        this.emit('saved-user', obj);
    }

    all() {
        console.log(database.users);
        return database.users;
    }
}


module.exports = {
    UserList
};
