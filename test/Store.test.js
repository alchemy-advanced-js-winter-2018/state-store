const assert = require('assert');
const Store = require('../lib/Store');
const Person = require('../lib/Person');

describe('Tests for state store', () => {

    it('state', () => {
        const store = new Store();
        assert.deepEqual(store.state, {});
    });

    it('set state', () => {
        const store = new Store();
        store.setState({ name: 'Barrie', toys: 'camera' });
        assert.deepEqual(store.state, { name: 'Barrie', toys: 'camera' });
    });

    it('state alters only provided keys', () => {
        const store = new Store();
        store.setState({ name: 'Barrie' });
        store.setState({ toys: 'camera' });
        assert.deepEqual(store.state, {
            name: 'Barrie',
            toys: 'camera'
        });
    });

    it('subscribe', () => {
        const store = new Store();
        let call = false;
        store.subscribe(() => call = true);
        assert.equal(call, false);
        store.setState({ name: 'Barrie' });
        assert.equal(call, true);
    });

    it('multiple subscribers', () => {
        const store = new Store();
        let call1 = false;
        let call2 = false;
        store.subscribe(() => call1 = true);
        store.subscribe(() => call2 = true);
        store.setState({ name: 'Barrie' });
        assert.equal(call1, true);
        assert.equal(call2, true);
    });

    it('unsubscribe', () => {
        const store = new Store();
        let call = false;
        const func = () => call = true;
        store.subscribe(func);
        store.unsubscribe(func);
        store.setState({ name: 'Barrie' });
        assert.equal(call, false);
    });

    it('person inherits store', () => {
        const person = new Person();
        person.setState({ name: 'Barrie' });
        person.setState({ toys: 'camera' });
        assert.deepEqual(person.state, { 
            name: 'Barrie',
            toys: 'camera'
        });
    });

});
