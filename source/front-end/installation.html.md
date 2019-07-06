---
title: "Installing AppSignal for JavaScript"
---

## Installation

First, add the `@appsignal/javascript` package to your `package.json`. Then, run `yarn install`/`npm install`.

You can also add these packages to your `package.json` on the command line:

```bash
yarn add @appsignal/javascript
npm install --save @appsignal/javascript
```

You can then import and use the package in your bundle:

```javascript
import Appsignal from "@appsignal/javascript" // For ES Module
const Appsignal = require("@appsignal/javascript").default // For CommonJS module

const appsignal = new Appsignal({ 
  key: "YOUR FRONTEND API KEY"
})
```

It’s recommended (although not necessarily required) to use the instance of the `Appsignal` object like a singleton. One way that you can do this is by `export`ing an instance of the library from a `.js`/`.ts` file somewhere in your project.

```javascript
import Appsignal from "@appsignal/javascript"

export default new Appsignal({
  key: "YOUR FRONTEND API KEY"
})
```

Currently, we have no plans to supply a CDN-hosted version of this library.
