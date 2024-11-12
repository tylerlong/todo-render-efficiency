# Jotai

A todo app powered by Jotai.

## Modifications

Added "NODE_OPTIONS=--openssl-legacy-provider" otherwise it won't start

We add a console.log to EVERY component, for example `console.log('render TodoItem')`

## Tests

For more details please refer to [Test procedure](https://github.com/tylerlong/todo-state-management?tab=readme-ov-file#test-procedure) and [Render Optimization Test](https://github.com/tylerlong/todo-state-management?tab=readme-ov-file#render-optimization-test).

## Result

Jotai failed some of the Render Optimization Test:

- create a new todo caused existing todos to re-render ❌
- delete a todo caused other todos to re-render ❌
- mark a todo as complete doesn't caused other todos to re-render ✅
- filter the todos to show only complete todos caused quite a LOT of renders ❌
  - 21 renders in total, it's hard to tell what is happening.
- remove the filter to show all todos cause reasonable number of renders ✅
  - 7 renders in total
