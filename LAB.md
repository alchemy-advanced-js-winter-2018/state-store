Store Store
===

## Description:

Create a class that manages its `state` property.

Standard repository/dev stuff: README, package.json, travis-ci, tests, meaningful commits, named npm scripts, etc.

* Setup scripts so that `npm test` runs linting

## Testing

Use TDD to drive the implementation. Think about the tests in terms of behavior, not implementation

## Requirements/Guidelines

### Base `Store` `class`

TDD a `class` that manages a `this.state` property. 

* Each `key` of the the state corresponds to a value we wish to track (dictionary or map)
* The class exposes the following methods:
  * `store.setState(<newValues>)`
  * `store.subscribe(<listener>)`
  * `store.unsubscribe(<listender>)`
  
#### `setState`

* Takes a dictionary (object literal) and updates the provided keys with the new values (other keys are not changed)
* Calls all of the functions that have "subscribed" (no need to pass parameters)

#### `subscribe`

* Adds the supplied listener to the `Map` of subscribers

#### `unsubscribe`

* Removes the supplied listener from the `Map` of subscribers

### Extend `Store`

You should be able to set initial state by extending `Store` and setting `this.state` in the constructor.

## Bonus

* Treat the `state` property as an immutable value

## Rubric:

* Tests: 4pts
* Correct Behavior: 4pts
* Project (Module) Organization: 2pts
