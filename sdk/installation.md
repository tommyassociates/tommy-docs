## Installing the SDK

You will need to have [Node.js](https://nodejs.org/en/download/) and [npm](https://docs.npmjs.com/cli/install) installed in order to use the SDK.

Install the SDK by typing:

```
# clone the repository from github
git clone git@github.com:tommyassociates/tommy_sdk.git
cd tommy_sdk

# install the dependencies from github
npm install
```

<!-- Open up the `config.json` file in the `tommy_sdk` folder and paste in your Tommy API Key. -->
Create a file called `config.json` file in the `tommy_sdk` folder and paste in the following contents, including your API key:

```
{
  "apiKey" : "<YOUR API KEY>",
  "apiEndpoint" : "https://api.mytommy.com",
  "apiSandboxEndpoint" : "https://api.mytommy.com"
}
```

Now launch the SDK process:

```
gulp
```

The SDK interface should open your browser automatically. If not you can load it an any time by pointing your browser to http://localhost:5000
