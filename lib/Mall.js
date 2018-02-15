const Store = require('./Store');

class Mall extends Store{
    constructor(name){
        super();
        this.state = {
            name: name
        };
    }
}

module.exports = Mall;