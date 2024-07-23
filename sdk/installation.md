## Installing the SDK

You will need to have [Node.js](https://nodejs.org/en/download/) and [yarn](https://yarnpkg.com/) installed in order to use the SDK.

Install the SDK by typing:

```
# clone the repository from github
git clone git@github.com:tommyassociates/tommy_sdk.git
cd tommy_sdk

# install the dependencies from github
yarn install
```

Create a file called `.env` file in the `tommy_sdk` folder and paste in the following contents, including your API key:

```
TOMMY_API_KEY="YOUR_API_KEY"
TOMMY_API_URL="https://api.mytommy.com"
```

Now launch the SDK process:

```
yarn run serve
```

The SDK interface should open your browser automatically. If not you can load it an any time by pointing your browser to http://localhost:8080
