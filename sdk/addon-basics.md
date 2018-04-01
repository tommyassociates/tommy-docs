## Building Addons

Addons enable you extend Tommy's core functionality in almost any way. This flexibility is one of the key features of the Tommy platform.

There are two main addon types that can be used for different purposes:

1. *Visial addon*: Addons which integrate with and extend the Tommy app interface
2. *Non-visial addon*: Addons which integrate with the [Tommy Action System](actions-system.md)
3. A combination of both.

### File Structure

The addon folder structure is very simple:

~~~
addons/{my_addon_version}/{my_addon_name}
.
├── manifest.yml
├── icon.png
└── views
    └── main.html
└── tasks
    └── mytask.js
└── locales
    └── en-US.json
~~~

The simplest possible addon that has no views or tasks could be comprised of just a single `manifest.yml` file.

Let's continue with an explaination of the `manifest.yml` file.

### Manifest File

The `manifest.yml` manifest file is the most important file in an addon. Each addon must contain a single manifest file, which contains all the metadata information, configuration options, and a list of views and actions to be exposed by your addon.

The example manifest below is taken from the very basic  [Poke](https://github.com/tommyassociates/tommy_sdk/tree/master/addons/poke/1.0.0) addon. This addon contains just one view, one task, and one action, and the manifest file looks like this:

```
---
  title: "Poke"
  package: "poke"
  version: "1.0.0"
  summary: "Unleash your inner mongrel."
  description: "This is a super imaginative long description for the Poke addon."
  developer: "Kam Low"
  homepage: "https://sourcey.com"
  private: false
  dependencies: &dependencies
    email: "*"
    chat: "*"
  tasks:
    default:
      name: "Default"
      description: "Task that fires the `poke.triggers.default` trigger."
      execute: "tasks/poke.js"
  triggers:
    default:
      name: "Default"
      description: "Trigger that contains a single message string parameter."
      parameters:
        message:
          type: "string"
          required: true
  actions:
    poke_to_message:
      title: "Poke chat message"
      description: "Send an annoying scheduled poke message to team members."
      task: "poke.tasks.default"
      trigger: "poke.triggers.default"
      activity: "chat.activities.send_message"
      mappings:
        message:
          title: "Message text"
          type: "variable"
          value: "trigger.message"
      dependencies: *dependencies
      timer:
        cron: "0 9 * * *"
  views:
    main:
      title: "Poke"
      file: "views/main.html"
      type: "page"
      framed: false
      default: true
      assets:
        -
          type: "stylesheet"
          file: "views/main.css"
        -
          type: "javascript"
          file: "views/main.js"
        -
          type: "template"
          file: "views/main.tpl.html"
```

The manifest options are as follows:

* **title**: (String) The human readable name of the addon.
* **package**: (String) The machine readable name of the addon in underscore case.
* **version**: (String) The release version number (must be incremented on each release).
* **author**: (String) The addons author name (may be individual or organisation).
* **private**: (Boolean) The privacy setting that determines if this addon is usable by other Tommy users or not.
* **views**: (Object) The object containing the views to be exposed on the interface.
* **actions**: (Object) The object containing the predefined actions implemented by the addon.
* **triggers**: (Object) The object containing the action triggers implemented by the addon.
* **conditions**: (Object) The object containing the action conditions implemented by the addon.
* **activities**: (Object) The object containing the action activities implemented by the addon.
* **roles**: (Array) Can be any role that has been dynamically assigned to a team member, or one of the built in roles: "Team Member", "Team Manager", "Team Admin"

#### Views

Each addon may contain multiple views to be exposed on the interface. Views are defined within the `views` option in the `manifest.yml` file.

* **id**: (String) The view page id (must be unique within addon scope).
* **name**: (String) The view page title.
* **file**: (String) The relative view path to the view HTML file ie. `client/main.html`.
* **type**: (String) The view type, current supported are `page` and `form`.
* **index**: (Boolean) Set to true for the main view that will be loaded when the addon is started.
* **framed**: (Boolean) Weather or not the view should be loaded inside an iframe.
* **roles**: (Array) Can be any role that has been dynamically assigned to a team member, or one of the built in roles: "Team Member", "Team Manager", "Team Admin"

If you want your view to be framed inside an `iframe`, you can do so by specifying the `framed: true` option. This is good for securing your view data, but be aware that since your view will be running in a sandboxed environment, none of the Tommy environment, API instance, or CSS styles will be available for use.
