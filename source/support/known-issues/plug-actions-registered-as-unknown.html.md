---
title: Plug actions registered as "unknown"
---

## Affected components

- AppSignal Elixir package versions: `v1.5.0-beta.1` - most recent

## Description

AppSignal groups performance and error samples by "action name". In Phoenix, we use the controller and action name (like `AppsignalPhoenixExampleWeb.UserController#show`). In pure Plug apps, it'd be best to fall back on the route name (like `/users/:id`), like we do for Sinatra apps in Ruby, but we can't currently get that data out of the `Plug.Conn`.

In versions before version 1.5.0-beta.1, `Appsignal.Plug` used the request method and the request path as the action name in plug-only apps. This caused problems for apps with unique URLs, as it creates a separate performance/error incident for each variation of the URL. To fix this, we're using "unknown" as the default action name in Plug apps, and we're allowing users to override that.

## Workaround

To override the "unknown" action name, use `Appsignal.Plug.set_action/2` from anywhere within the action.

```elixir
get "/users/:id" do
  conn
  |> Appsignal.Plug.set_action("GET /users/:id")
  |> send_resp(200, "Welcome")
end
```

-> **Note**: `Appsignal.Plug.set_action/2` was added in version 1.12.0 of the
AppSignal for Elixir package. Use `Appsignal.Transaction.set_action/1` on
earlier versions.
