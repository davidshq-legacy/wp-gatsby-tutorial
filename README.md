# Using WordPress with Gatsby Tutorial
This tutorial demonstrates how to setup a Gatsby instance to utilize a WordPress GraphQL source.

# Setup WordPress
1. Use an existing WordPress site or setup a new site.
2. Download, install, and activate the [WPGraphQL plugin](https://github.com/TylerBarnes/using-gatsby-source-wordpress-experimental/tree/master/WordPress/plugins) from GitHub.
3. Download, install, and activate the [WP-Gatsby plugin](https://github.com/TylerBarnes/using-gatsby-source-wordpress-experimental/tree/master/WordPress/plugins) from GitHub.

# Setup Gatsby Environment
You can setup Gatsby in any number of ways. In this example I'll be using Visual Studio Code.
1. Create a folder which will contain your Gatsby environment (e.g. wp-gatsby).
2. Open Visual Studio code.
3. Press Ctrl+Shift+P (or navigate to View --> Command Palette) to display the Command Palette prompt.
4. Begin entering "Remote-Containers: Add Development Container Configuration Files", select appropriate option.
5. Choose Show All Definitions.
6. Choose Node.js.
7. You will be prompted to reload the current project in its container, reject this and edit the devcontainer.json file inside of the .devcontainer folder that was automatically created.
8. To avoid issues with Node.js, add to `"build"` `"args": { "VARIANT": "12" }`.
9. Uncomment `"remoteUser": "node"`.
10. Press Ctrl+Shift+P and begin entering "Remote-Containers: Reopen in Remote Container".
11. VSC will spin up a new container for you (this only needs happen once), once it has been successfull created open a Terminal (Ctrl+Shift+`) and it will be within the container rather than one's local system.

# Install Gatsby
1. Run `npm install gatsby-cli`
2. It will take several moments for npm to download and install the necessary packages.
2. Create a new gatsby instance by running `gatsby new wpgatsby` (the name wpgatsby can be anything you desire).
3. It will take more time for npm to download and install the necessary packages.
4. With any luck you'll get the message: "Your new Gatsby website has been successfully bootstrapped."
5. Enter into the gatsby site directory: `cd wpgatsby`.

# Add the WordPress Source Plugin to Gatsby
You'll now need to install `gatsby-source-wordpress-experimental` into your gatsby instance so that Gatsby can use data coming from your WordPress site.
1. Run `npm install gatsby-source-wordpress-experimental`
2. Open `gatsby-config.js` and provide a configuration for the plugin within the `plugins: []` section:
```
{
  resolve: `gatsby-source-wordpress-experimental`,
  options: {
    url: `https://gatsby.wpdeveloping.com/graphql`,
  },
},
```

# Is Everything Working?
Lets test to make sure everything is working correctly.
1. Run `gatsby develop`.
2. Wait for gatsby to spin up.
3. Visit http://localhost:8000 to see the Gatsby site.
4. Visit http://localhost:8000/\_\_graphql to use GraphiQL, an IDE for writing GraphQL queries.
5. Run a test to ensure that your local Gatsby instance can successfully pull data from WPGraphQL.
