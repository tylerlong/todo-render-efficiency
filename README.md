# Todo State Management

I've started this project, Todo State Management, with the goal of comparing various state management libraries to see which can best optimize render cycles in a React todo app.
By reducing unnecessary re-renders, we can save computing resources, conserve energy, and contribute to a more environmentally sustainable approach to software development.

## Why this matters?

Every render in a React app consumes power, especially when multiplied across many devices and users.
By carefully choosing and configuring state management libraries that minimize renders, we can make our applications more efficient, which not only improves user experience but also aligns with a greener approach to development.

## PRs are welcome!

We will build a todo app with each state management library, and each of them will be in a separate branch.
For those libraries that provide examples for a todo app, we will the example app provided.
We may make some modifications to them in order to conduct the tests below.

To state management library authors: feel free to creaet a PR to add your library.
It doesn't need to be famous to be added.

## Testing results (ordered by number of stars on GitHub)

We haven’t finished testing all the libraries yet. It’s a work in progress.

- zustand
- [jotai](https://github.com/pmndrs/jotai)
  - passed 1/5 tests
  - [run the test yourself](https://github.com/tylerlong/todo-state-management/tree/jotai)
- [valtio](https://github.com/pmndrs/valtio)
  - passed 0/5 tests
  - [run the test yourself](https://github.com/tylerlong/todo-state-management/tree/valtio)
- koota
- manate

## Common rules

We disable `<StrictMode>`, because it's for development. We would like to evaluation behaviors for production.

We add a `console.log` to the beginning of EVERY React component, for example `console.log("<ComponentName> render");`. So that we can evaluate the render optimization.

## Testing rules

If a component didn't change, we should not re-render it, period.

In order to pass a test, the app must NOT do any unnecessary renders.

In the mean time, we need to make sure that the app behavior is 100% correct.
If a component changed (its output) and the app didn't re-render it, it is a **critical** bug.

## Preparation

- Create 5 todos with text "todo #1", "todo #2", "todo #3", "todo #4", "todo #5".
- Open browser console
- Clear browser console
- watch browser console for the tests below

## test 1

Create a new todo with text "todo #6".

It should **NOT** cause the existing 5 todos to re-render because they didn't change.

## test 2

Delete the todo with text "todo #1".

It should **NOT** cause the other 5 todos to re-render because they didn't change.

## test 3

Mark the todo with text "todo #3" as complete.

It should **NOT** cause the other 4 todos to re-render because they didn't change.

## test 4

Filter the list to only show complete todos

It should **ONLY** cause the list to re-render.

**None** of the todos should re-render because they didn't change.

Incomplete todos disappeared from screen so we should **NOT** render them.

Complete todos didn't change so we should **NOT** re-render them.

## test 5

Remove the filter to show all todos

It should **ONLY** cause the list and incomplete todos to render.

Complete todos stays in the list without any change, we should **NOT** re-render them.
