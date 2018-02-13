const assert = require('assert');
const Store = require('../lib/Store');
const Mall = require('../lib/Mall');

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

    it('subscribe calls function subscribed to store when state changes', () => {
        const store = new Store();
        let run = false;
        const func = () => {run = true;};
        store.subscribe(func);
        store.setState({ 'item': 'new' });
        assert.deepEqual(run, true);

    });

    it('unsubscribe removes func from set', () => {
        const store = new Store();
        let run = false;
        const func = () => {run = true;};
        store.subscribe(func);
        store.unsubscribe(func);
        store.setState({ 'item': 'new' });
        assert.deepEqual(run, false);
    });

    it('Mall extends Store', () => {
        const mall = new Mall('Cat');
        mall.setState({ 'item': 'new' });
        assert.deepEqual(mall.state, { 'name': 'Cat', 'item': 'new' });
    });

    it('Mall extends store and subscribe works', () => {
        const mall = new Mall('Cat');
        let run = false;
        const func = () => {run = true;};
        mall.subscribe(func);
        mall.setState({ 'item': 'new' });
        assert.deepEqual(run, true);

    });
});