class Store {
    constructor() {
        this.state = {};
    }

    setState(dict){
        for(var key in dict){
            this.state[key] = dict[key];
        }
    }

}

module.exports = Store;