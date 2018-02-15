const assert = require('assert');
const Store = require('../lib/store');

describe('state store', () => {
    it('sets state', () => {
        const store = new Store();
        store.setState({ name: 'jacob' });
        store.setState({ day: 'asdf' });
        assert.deepEqual(store.state, { day: 'asdf', name: 'jacob' });
    });

    it('calls subscriber', () => {
        const store = new Store();
        let called = false;
        store.subscribe(() => called = true);
        assert.equal(called, false);
        store.setState({ name: 'jascob' });
        assert.equal(called, true);
    });

    it('call unsubscriber', () => {
        const store = new Store();
        let called = false;
        let scribeFunc = () => called = true;
        store.subscribe(scribeFunc);
        store.unsubscribe(scribeFunc);
        store.setState({ name: 'jacco' });
        assert.equal(called, false);
    });
});