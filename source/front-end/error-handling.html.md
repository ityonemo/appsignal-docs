---
title: "Frontend error catching <sup>beta</sup>"
---

Good news! 🎉

We now have a first-class, hosted solution for catching errors from front-end JavaScript applications and sending them to AppSignal. This means no more copy-and-pasted code from the documentation, or using an endpoint in your own API to catch errors. We now host the infrastructure, and provide a new `npm` library for catching JavaScript errors. Awesome!

This is a __Beta__ implementation, which means:

* This feature is not available for all users initially.
* Although you should expect few changes, the API may change before public release.

## Table of Contents

- [Creating a Push API Key](#creating-a-push-api-key)
- [Installation](#installation)
- [Configuration](#configuration)
- [Plugins](#plugins)
- [Integration](#integration)

!> **NOTE:** Uncaught exceptions are **not** captured by default. We made the decision to not include this functionality as part of the core library due to the high amount of noise from browser extensions, ad blockers etc. that generally makes libraries such as this less effective. We recommend using a relevant [integration](about:blank#integrations) as a better way to handle exceptions, or, if you *would* prefer capture uncaught exceptions, you can do so by using the `@appsignal/plugin-window-events` package alongside this one (available soon).

## Creating a Push API Key

@TODO

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

## Configuration

### `Appsignal` options

The `Appsignal` object can be initialized with the following options:

| Param | Type | Description  |
| ------ | ------ | ----- |
|  key  |  string  |  Your AppSignal Push API key  |
|  uri  |  string  |  (optional) The full URI of an AppSignal Push API endpoint  |
|  namespace  |  string  |   (optional) A namespace for errors  |
|  revision  |  string  |   (optional) A Git SHA of the current revision |

## Plugins

The `Appsignal` object can take one or many optional “plugins” that can extend the base functionality of the library e.g. for handling uncaught exceptions via `window.error` or `onunhandledpromiserejection`.

```javascript
import { plugin } from `appsignal/plugin-${PLUGIN_NAME}`
appsignal.use(plugin())
```

@TODO: add more on plugins

## Integrations

An integration is a module that can consume the `Appsignal` object to catch errors from popular libraries or frameworks. These integrations may come in a variety of different forms, and we aim to generally provide APIs that are consistent, and feel idiomatic to use, with the libraries and/or frameworks that you’re using.

These currently include:

- React (beta) - `@appsignal/react`
- Vue (beta) - `@appsignal/vue`
