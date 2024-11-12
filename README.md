# Todo app with valtio as state management library

The code is copied from: https://github.com/pmndrs/valtio/tree/main/examples/todo

## Modifications

We disabled `<StrictMode>`, because it's for development only. We would like to evaluation behaviors for production.

We add a key to `FilterRow` buttons list, otherwise React will complain.

We add a `console.log` to EVERY component, for example `console.log("TodoRow render");`
