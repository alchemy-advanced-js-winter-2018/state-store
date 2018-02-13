const Store = require('./Store');

class Person extends Store {
    constructor(name, toys) {
        super();
        this.state = {
            name: name,
            toys: toys
        };
    }
}

module.exports = Person;