# The GraphQL server

## Troubleshooting

### ES6 Compatability

- If you get the error `Class constructor Model cannot be invoked without 'new'`, then that means you are trying to use es6 classes by an interpreter that can't handle it (aka Node as of writing this). In order to fix, install the ems package

```
npm install --save esm
```

- Now just run your code with esm:

```
node -r esm ./dist/server.js
```
