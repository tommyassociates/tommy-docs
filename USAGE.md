# Tommy Developer Documentation

This repo contains the Tommy developer documentation in GitBook format.

The start the gitbook use the following command:

```
# install gitbook
npm install -g gitbook-cli

# start the local gitbook server
gitbook serve

# build the gitbook
gitbook build
```

Generate the HTML docs with Spectacle:

```
node /home/kam/sourcey/spectacle-docs/bin/spectacle.js -l assets/logo.png -t api swagger.json
spectacle -l assets/logo.png -t api swagger.json
```

To deploy the docs use the following command:

```
./publish.sh
```
