class Store{

    constructor(){
        this.state = {};
        this.listeners = new Set();
    }

    setState(object){
        for(let key in object){
            this.state[key] = object[key];
        }
        this.listeners.forEach(func => func());
    }

    subscribe(listener){
        this.listeners.add(listener);
    }

    unsubscribe(listener){
        this.listeners.delete(listener);
    }
}

module.exports = Store;