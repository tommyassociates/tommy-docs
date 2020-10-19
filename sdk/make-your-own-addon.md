## Make Your Own Addon

From start to finish, learn how to build and package a Tommy addon.


### Getting Started

This guide is a work in progress. For now please copy, paste and reverse engineer the existing demo code.

For a very basic addon with just a single view check the Poke addon source code: `/addons/poke`

For a more advanced addon with multiple views and controllers check the Tasks addon source code: `/addons/tasks`. Note that the Tasks addon leverages the [dynamic features](using-the-sdk.md#dynamic-features) of the SDK.


### Using the API

Tommy's full API is at your disposal. It lets you create chats, events, and flexible data schemas that can power the most complex realtime applications.

Again, demo addons are the best reference for getting started. The Tasks addon is a great starting point.

See the [API Reference](ref:///api/index.html)


### Locking an addon

An addon can be locked by using the `lockable` variable as part of the [index view](addon-basics.md#Views).

We then use a computed variable `isLocked` to either show locked or not locked content using a `v-if` and `v-else` conditional.

```
<template v-if="isLocked">
  Locked content.
</template
<template v-else>
  Not locked content.
</template>

computed: {
  isLocked() {
    return this.$store.state.miniProgramLocked.isLocked
      && this.$store.state.miniProgramLocked.miniProgram === 'addon_package';
  },
}
```

### Requesting kiosk mode

Locking an addon is usually performed on an addons settings page via a tommy link and is done by a Team Manager or Team Admin. Click on the tommy link and then click the `Confirm` button. 

Once an addon is locked, we are redirected to a pin code page. Success entry of the pin code will redirect to the index view where the `isLocked` computed variable will be true. 

```
<a href="tommy://lock?addon=addon_package&showmenu=true">
Lock this mini program so that team members can interact with it by entering a pin code.
</a>
```

#### Tommy link variables
* **addon**: (String) The package name of the addon.
* **showmenu** (Boolean) Will show the orange slide out menu if true. If false, a settings icon will appear at the bottom left of the screen. Defaults to true.

### Unlocking an addon

To unlock an addon, open the side menu, then click on the `Unlock` button. Now enter in your `Email or phone number` and `Password` to unlock the device. 
