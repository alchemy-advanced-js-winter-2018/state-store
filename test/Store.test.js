const assert = require('assert');
const Store = require('../lib/Store');

describe('Tests for state store', () => {

    it('state', () => {
        const store = new Store();
        assert.deepEqual(store.state, {});
    });

    it('set state', () => {
        const store = new Store();
        
    });
});