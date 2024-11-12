# valtio

A todo app using valtio as state management library.

The code is copied from: https://github.com/pmndrs/valtio/tree/main/examples/todo

## Modifications

We disabled `<StrictMode>`, because it's for development only. We would like to evaluation behaviors for production.

We add a key to `FilterRow` buttons list, otherwise React will complain.

We add a `console.log` to EVERY component, for example `console.log("TodoRow render");`

## Tests

For more details please refer to [Test procedure](https://github.com/tylerlong/todo-state-management?tab=readme-ov-file#test-procedure) and [Render Optimization Test](https://github.com/tylerlong/todo-state-management?tab=readme-ov-file#render-optimization-test).

## Result

valtio failed the Render Optimization Test:

- create a new todo caused existing todos to re-render
- delete a todo caused other todos to re-render
- mark a todo as complete caused all todos to re-render
