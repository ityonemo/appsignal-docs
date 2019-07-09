---
title: "plugin-window-events"
---

## Plugins

The `Appsignal` object can take one or many optional “plugins” that can extend the base functionality of the library e.g. for handling uncaught exceptions via `window.error` or `onunhandledpromiserejection`.

```javascript
import { plugin } from `appsignal/plugin-${PLUGIN_NAME}`
appsignal.use(plugin())
```
