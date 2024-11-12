# Todo State Management

This is a repo to compare different state management libraries.

We will build a todo app with each statement library, and each of them will be in a separate branch.

For those libraries that provide examples for a todo app, we will the example app provided. We will make some modifications to make them object the common rules mentioned below.

Below are the libraries we included (ordered by number of stars on GitHub):

- zustand
- jotai
  - [todo app](https://github.com/tylerlong/todo-state-management/tree/jotai)
- valtio
  - [todo app](https://github.com/tylerlong/todo-state-management/tree/valtio)
- koota

For now all of them are from https://github.com/pmndrs. It's quite interesting to see a GitHub organization to release 4 state management libraries to "compete" with each other.

In the future, I will add more state management libraries. PRs are very welcome! To state management library authors: feel free to creaet a PR to add your library. It doesn't need to be famous to be added.

## Common rules

We disable `<StrictMode>`, because it's for development. We would like to evaluation behaviors for production.

We add a `console.log` to the beginning of EVERY React component, for example `console.log("<ComponentName> render");`. So that we can evaluate the render optimization.

## Test procedure

1. Create 5 todos with text "todo #1", "todo #2", "todo #3", "todo #4", "todo #5".
2. Clear browser console
3. Create a new todo with text "todo #6"
4. Delete todo with text "todo #1"
5. Mark todo with text "todo #3" as complete
6. Filter the list to only show complete todos
7. Remove the filter to show all todos

## Render Optimization Test Rules

In order to pass the render optimization test, the app must not do any unnecessary renders:

## test 1

In step #3, create a new todo should **NOT** cause the existing 5 todos to re-render because they didn't change.

## test 2

In step #4, delete a todo should **NOT** cause the other 5 todos to re-render because they didn't change.

## test 3

In step #5, mark a todo as complete should **NOT** cause the other 4 todos to re-render because they didn't change.

## test 4

In step #6, filter the list to only show complete todos, should **ONLY** cause the list to re-render.
**None** of the todos should re-render because they didn't change.
Incomplete todos disappeared from screen so we should **NOT** render them.
Complete todos didn't change so we should **NOT** re-render them.

## test 5

In step #7, remove the filter to show all todos, should **ONLY** cause the list and incomplete todos to render.
Complete todos stays in the list without any change, we should **NOT** re-render them.

## mores tests

Just use some commons sense: if a component didn't change, we should not re-render it, period.

In the mean time, we need to make sure the app behavior 100% correct. If a component changed (its output) and the app didn't re-render it, it is a **critical** bug.
