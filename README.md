# valtio

A todo app using valtio as state management library.

The code is copied from: https://github.com/pmndrs/valtio/tree/main/examples/todo

## Modifications

We disabled `<StrictMode>`, because it's for development only. We would like to evaluation behaviors for production.

We add a key to `FilterRow` buttons list, otherwise React will complain.

We add a `console.log` to EVERY component, for example `console.log("TodoRow render");`

## Tests

For more details please refer to [Test procedure](https://github.com/tylerlong/todo-state-management?tab=readme-ov-file#test-procedure) and [Render Optimization Test](https://github.com/tylerlong/todo-state-management?tab=readme-ov-file#render-optimization-test).

## Result (passed 0 / 5)

valtio failed all the Render Optimization Tests:

### test 1 ❌

In step #3, create a new todo should NOT cause the existing 5 todos to re-render because they didn't change.

### test 2 ❌

In step #4, delete a todo should NOT cause the other 5 todos to re-render because they didn't change.

### test 3 ❌

In step #5, mark a todo as complete should NOT cause the other 4 todos to re-render because they didn't change.

### test 4 ❌

In step #6, filter the list to only show complete todos, should ONLY cause the list to re-render.
None of the todos should re-render because they didn't change.
Incomplete todos disappeared from screen so we should NOT render them.
Complete todos didn't change so we should NOT re-render them.

### test 5 ❌

In step #7, remove the filter to show all todos, should ONLY cause the list and incomplete todos to render.
Complete todos stays in the list without any change, we should NOT re-render them.
