## Understanding the Actions System

Each Addon may define a number of Actions that can be used to run dynamic code and perform arbitrary tasks that update the interface in realtime. The Tommy Actions system is exactly like an IFTTT system thats uses the following object: `Tasks`, `Triggers`, `Conditions`, and `Activities`.

<!--
[bark.js](https://github.com/tommyassociates/tommy_sdk/blob/master/addons/poke/1.0.0/tasks/bark.jj)
-->

### Tasks

Tasks run a block of code at scheduled intervals and fire a `Trigger` when data is available or an internal condition is met. The code executed by tasks is completely implementation independent, but the data output by the script must be in a format that Tommy understands so the Actions system can execute the correct `Trigger`.

### Triggers

Triggers are executed by a `Task` and passed into the Actions system to be processed by an `Activity`.

### Conditions

Conditions are optional processors that check the `Trigger` data to determine if an `Activity` can be run. Conditions us conditional operators such as `greater_than`, `less_that` or `equal_to` to process `Trigger` data.

### Activities

Activities handle `Trigger` data and do something with it. This may include sending an email, notifying a user, or just about anything you could imagine with our internal or external third party APIs.

### Defining an Action

The easiest way to learn how to define an action is to reverse engineer what's already been built. Take for example the `poke` addon which defines an action that runs a `Task` (_poke.tasks.default_), a `Triggers` (_poke.triggers.default_) and an `Activity` (_chat.activities.send_message_).

```
actions:
  poke_to_message:
    title: "Poke chat message"
    description: "Send a poke message to users at scheduled intervals."
    task: "poke.tasks.default"
    trigger: "poke.triggers.default"
    activity: "chat.activities.send_message"
    mappings:
      message:
        title: "Message text"
        type: "variable"
        value: "trigger.message"
    timer:
      cron: "0 9 * * *"
    dependencies:
      chat: "1.0"
```

So what is actually going on here? It's pretty straight forward once you understand the syntax.

The `timer` parameter tells the actions system to run the specified task at [every day at 9am](https://en.wikipedia.org/wiki/Cron).

In our case the task being run is `poke.tasks.default`, whose only function is to fire the `poke.triggers.default` trigger. Both of these tasks and triggers are defined in the `manifest.yml` file, the full contents of which can be seen [here](https://github.com/tommyassociates/tommy_sdk/blob/master/addons/poke/1.0.0/manifest.yml).

Our action definition specifies `chat.activities.send_message` as the activity to be run when the `poke.triggers.default` trigger is fired. As you may have guessed from the `chat.` prefix on the activity parameter, the `chat.activities.send_message` activity is actually defined externally in the `chat` addon, and the sole purpose of the activity is to send a chat message when run. This is how you reference an external addon's tasks, triggers and activities when programming your own addons. Note that if you reference an external addons items, then you must add them to the `dependency` list.

The other very important thing to mention is the `mappings` parameter. This describes how the activity will consume the trigger data. If our case the trigger just takes a simple `message` paramater, and our trigger also outputs a `message` param, so all we doing is mapping the trigger's `message` param with the activity.
