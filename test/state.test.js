const assert = require('assert');
const Store = require('../lib/Store');

describe('checks store state', () => {
    
    it('state starts as empty object', () => {
        const store = new Store();
       
        assert.deepEqual(store.state, {});
    });

    it('setState updates store state', () => {
        const store = new Store();
        
        store.setState({ 'item': 'widget' });
        
        assert.deepEqual(store.state, { 'item': 'widget' });
    });

    it('setState adds to state if new dict added', () => {
        const store = new Store();

        store.setState({ 'item': 'widget' });
        store.setState({ 'item2': 'book' });

        assert.deepEqual(store.state, { 'item': 'widget', 'item2': 'book' });

    });
});