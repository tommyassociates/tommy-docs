## Using the SDK

The SDK contains a number of tools for the purpose of building Tommy addons.

### Using the Emulator

The core of the SDK is an emulator which emulates the Tommy app environment on your local machine. This lets you develop addons for Tommy that will integrate seamlessly with the live app when you package and release them.

If you followed the installation steps you will see the emulator, which is the main SDK interface, loaded in your browser.

The emulator lets you preview addons that you are building in realtime. The source code for addons is located in the `/addons` folder. The demo addons that are provided with the SDK are a great starting point, and should be used as a reference for building your own addons.

The main emulator view contains two sections:

* __Addons__: A list of all the addons loaded from the `/addons` folder.
* __Views__: A list of all the addon views that can be opened. If you click on any view you will be able to see that view emulated inside the browser. If you modify any of the code from the relative addon, then that view will be automatically reloaded and you can see your changes in your browser in real time.

The SDK itself is very straight forward to use, so when you're ready lets move on to an exaplanation of the addon file structure and manifest files.


### Dynamic Features

The SDK has some dynamic features that you will want to leverage in order to speed up your development flow:

* __Live Reload__: Whenever you edit any addon code the current addon view will be reloaded. You can configure the default addon view to be autoloaded via the `Settings` page of the interface.

* __JS Compiling__: Javascripts located at `views/javascripts/**/.js` will be auto compiled into `views/build/bundle.js` in realtime. ES6 code is fully supported. See the Tasks addon source for an example.

* __SASS Compiling__: SASS stylesheets located at `views/stylesheets/**/.scss` will be auto compiled into `views/build/bundle.css` in realtime. Only SASS is supported at this time. See the Tasks addon source for an example.

* __Template Compiling__: Template7 templates located at `views/templates/**/.tpl.html` will be auto compiled into `views/build/bundle.tpl.html` in realtime. See the Tasks addon source for an example.



<!--
When you first load the emulator you will notice there are some demo addons available in the menu. The source code for these demo addons is located in the `/addons` folder, and they are a good point of reference for building your own addons.

Underneath the `Views` heading you will see a number of addon views that can be opened. If you click on any view you will be able to see that view emulated inside the browser. If you modify any of the code from the relative addon, then that view will be automatically reloaded and you can see your changes in real time.
-->

<!-- Beside each addon on the interface there is a settings button that will bring up a list of actions that are available for testing and deploying your addon. -->

<!-- ### Getting Started

While developing your addons you can work from the local file system, and when you are ready to test the addon on a live environment.

## Local Development

The local testing phase lets you build and preview your addon interface locally before uploading anything.

To preview your addon just select the addon from the main emulator view.

**Note**: If you're building an addon for the purpose of creating actions then you will need to install the addon on the sandbox server before you can test your actions. See (#sandbox-testing)[Sandbox Testing Phase].

## Sandbox Testing

The sandbox testing phase lets you test your addon on a live environment before you submit your final addon to Tommy.

You can install your addon on the sandbox server at any time by selecting the addon from the main emulator view and clicking "Install on Sandbox"

To access your addon open the Tommy app and change to your Developer account from the account toggle. While your Developer account is active you will be able to configure and use all the actions you have installed on the sandbox account.

## Submit Addon

Once your addon is fully tested you can submit it to Tommy for review. If accepted your addon will be installed on the live system and you will be able to install it from the Tommy Store.
-->
