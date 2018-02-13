class Store {
    constructor() {
        this.state = {};
        this.listeners = new Set();
    }

    setState(dict){
        for(var key in dict){
            this.state[key] = dict[key];
        }
        this.listeners.forEach(item => item());
    }

    subscribe(item){
        this.listeners.add(item);
        
    }



}

module.exports = Store;