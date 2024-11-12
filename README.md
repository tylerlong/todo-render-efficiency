# Jotai

A todo app powered by Jotai.
The source code is copied from https://github.com/pmndrs/jotai/tree/main/examples/todos.

## Modifications

We added `NODE_OPTIONS=--openssl-legacy-provider` otherwise it won't start with node.js 20.

We add a console.log to EVERY component, for example `console.log('render TodoItem')`

## How to run

```
yarn install
yarn start
```

## Tests

For test rules and details, please go to the <a href="https://github.com/tylerlong/todo-state-management" target="_blank">main branch</a>.

## Result (passed 1 / 5)

- test 1 ❌
- test 2 ❌
- test 3 ✅
- test 4 ❌
- test 5 ❌
