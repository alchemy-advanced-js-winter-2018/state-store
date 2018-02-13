State Store
===

## Description:

Create a `Store` class that manages its `state` property.

Standard repository/dev stuff: README, package.json, travis-ci, tests, meaningful commits, named npm scripts, etc.

* Setup scripts so that `npm test` runs linting

## Testing

Use TDD to drive the implementation. Think about the tests in terms of behavior, not implementation

## Requirements/Guidelines

### Base `Store` `class`

TDD a `class` that manages a `this.state` property. 

* `this.state` should be initialized to an empty object
* Each `key` of the the state corresponds to a value we wish to track (dictionary or map)
* The class exposes the following methods:
  * `store.setState(<newValues>)`
  * `store.subscribe(<listener>)`
  * `store.unsubscribe(<listender>)`
  
#### `setState`

* Takes a dictionary (object literal) and updates the provided keys with the new values (other keys are not changed)
    ```js
    const store = new Store();
    store.setState({ name: 'wilma' });
    // store.state is now { name: 'wilma' }
    store.setState({ toys: ['ball', 'car', 'top'] });
    // store.state is now { name: 'wilma', toys: ['ball', 'car', 'top'] }
    store.setState({ name: 'freddy' });
    // store.state is now { name: 'freddy', toys: ['ball', 'car', 'top'] }
    store.setState({ name: 'bobby', partyDay: new Date() });
    // store.state is now { name: 'bobby', toys: ['ball', 'car', 'top'], partyDay: '2/13/2018' }
    ```
    
* Calls all of the functions that have "subscribed" (no need to pass parameters)
    ```js
    const store = new Store();
    store.subscribe(() => console.log('store changed', store.state));
    store.setState({ name: 'joanne' });
    // logs 'store changed' { name: 'joanne' })
    ```
    
* You don't have to check if value actually changed, if `setState` is called, always treat as new value
    ```js
    const store = new Store();
    store.subscribe(() => console.log('store changed', store.state));
    store.setState({ name: 'joanne' });
    // logs 'store changed' { name: 'joanne' })
    store.setState({ name: 'joanne' });
    // still logs 'store changed' { name: 'joanne' })
    ```

#### `subscribe`

Adds the supplied listener to the `Map` of subscribers

#### `unsubscribe`

Removes the supplied listener from the `Map` of subscribers

   ```js
   const store = new Store();
   const listener = () => console.log('store changed', store.state);
   store.subscribe(listener);
   store.setState({ name: 'joanne' });
   // logs 'store changed' { name: 'joanne' })
   store.unsubscribe(listener);
   store.setState({ name: 'jimmy' });
   // no log
   ```


### Extend `Store`

You should be able to set initial state by extending `Store` and setting `this.state` in the constructor.

```js
class Person extends Store {
    constructor(name, toys) {
        super();
        this.state = {
            name: 'tammy',
            toys: ['tank', 'airplane']
        }
    }
}

const person = new Person();
person.subscribe(() => console.log(person.state));
person.setState({ name: 'tammy the great' });
// logs: { name: 'tammy the great', toys: ['tank', 'airplane' ]}
```

## Bonus

* Treat the `state` property as an immutable value (use `Object.assign` to create a new state object each time
data changes)

## Rubric:

* Tests: 4pts
* Correct Behavior: 4pts
* Project (Module) Organization: 2pts
