# gatsby-plugin-ts-checker

Add typescript type checking to Gatsby.


## Install

Use npm, yarn, or whatever node package manager is hot right now.

```js
// gatsby-config.js
module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-ts-checker',
  ]
}
```

## Options

Since this is just a wrapper for [Fork TS Checker Webpack Plugin](https://www.npmjs.com/package/fork-ts-checker-webpack-plugin),
you can pass their options like so:

```js
// gatsby-config.js
module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    {
      options: {
        memoryLimit: 4096,
        mode: 'write-tsbuildinfo',
      },
      resolve: 'gatsby-plugin-ts-checker',
    }
  ]
}
```
