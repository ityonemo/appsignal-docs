---
title: "Frontend error catching <sup>beta</sup>"
---

## Track any error

Catch an error and report it to AppSignal:

```javascript
try {
  // do something that might throw an error
} catch (error) {
  appsignal.sendError(error)
  // handle the error}

// You can catch errors asynchronously by listening to Promises...
asyncActionThatReturnsAPromise().catch(error => appsignal.sendError(error))

// ...or by using async/await
async function() {
  try {
    const result = await asyncActionThatReturnsAPromise()
  } catch (error) {
    appsignal.sendError(error)
    // handle the error}
  }

// ...or in an event handler or callback function

events.on("event", (err) => { appsignal.sendError(err) })
```

### Uncaught exceptions

Uncaught exceptions are **not** captured by default. We made the decision to not include this functionality as part of the core library due to the high amount of noise from browser extensions, ad blockers etc. that generally makes libraries such as this less effective.

We recommend using a relevant [integration](about:blank#integrations) as a better way to handle exceptions, or, if you *would* prefer capture uncaught exceptions, you can do so by using the `@appsignal/plugin-window-events` package alongside this one (available soon).


