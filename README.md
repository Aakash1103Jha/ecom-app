# ecom-app

A small micro-frontend demo app. Each MFE app in this app can work as a standalone app in itself, and also can be integrated using Webpack, into `container` MFE app.

## Directory
    |-- cart/
          |-- public/
                |-- index.html
          |-- src/
                |-- index.js
          |-- package.json
          |-- webpack.config.js
    |-- container/
          |-- public/
                |-- index.html
          |-- src/
                |-- bootstrap.js (not for styling)
                |-- index.js
          |-- package.json
          |-- webpack.config.js
    |-- products/
          |-- public/
                |-- index.html
          |-- src/
                |-- index.js
          |-- package.json
          |-- webpack.config.js

`cart` and `products` are essentially the two pieces (Micro-Frontend App) of the whole ecom-app, which will then be **Integrated** in the `container` MFE app.

## Stack

- HTML
- Vanilla JS
- Webpack (and WebpackFederationPlugin to enable code sharing between MFE apps.)
