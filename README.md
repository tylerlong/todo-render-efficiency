# Zustand

A todo app powered by [zustand](https://github.com/pmndrs/zustand).

I didn't find an official todo example for Zustand. So, I wrote one myself.
I am not an zustand expert, so please create PR to fix my mistakes. Thanks. -- Tyler Liu

## How to run?

```
yarn install
yarn serve
```

## Tests

For test rules and details, please go to the <a href="https://github.com/tylerlong/todo-state-management" target="_blank">main branch</a>.

## Result (passed 4 / 5)

- test 1 ✅
- test 2 ✅
- test 3 ❌
- test 4 ✅
- test 5 ✅

In test 3, when toggling a todo as complete, it causes the `TodoListComponent` to re-render while it should **NOT**.
It should only cause one `TodoComponent` item to re-render.
