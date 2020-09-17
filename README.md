# Using WordPress with Gatsby Tutorial
This tutorial demonstrates how to setup a Gatsby instance to utilize a WordPress GraphQL source.

# Setup WordPress
1. Use an existing WordPress site or setup a new site.
2. Download, install, and activate the [WPGraphQL plugin](https://github.com/TylerBarnes/using-gatsby-source-wordpress-experimental/tree/master/WordPress/plugins) from GitHub.
3. Download, install, and activate the [WP-Gatsby plugin](https://github.com/TylerBarnes/using-gatsby-source-wordpress-experimental/tree/master/WordPress/plugins) from GitHub.

# Setup Gatsby Environment
For [step-by-step instructions on setting up a Gatsby environment](https://github.com/davidshq/wp-gatsby-tutorial/tree/master).

# Install Gatsby
1. Run `npm install -g gatsby-cli`
2. It will take several moments for npm to download and install the necessary packages.
2. Create a new gatsby instance by running `gatsby new wpgatsby` (the name wpgatsby can be anything you desire).
3. It will take more time for npm to download and install the necessary packages.
4. If prompted to choose a package manager and you don't have a preference, choose npm.
5. With any luck you'll get the message: "Your new Gatsby website has been successfully bootstrapped."
6. Enter into the gatsby site directory: `cd wpgatsby`.

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
2. Wait for Gatsby to spin up.
3. Visit http://localhost:8000 to see the Gatsby site.
4. Visit http://localhost:8000/__graphql to use GraphiQL, an IDE for writing GraphQL queries.
5. Run a test to ensure that your local Gatsby instance can successfully pull data from WPGraphQL.
  - You can use this [query for pulling Pages](graphiql-allpages.json) and this one [for pulling Posts](graphiql-allposts.json)

# Create a Blog Post Template
1. Create a `templates` folder inside of the `src` folder in your local Gatsby instance.
2. Add a template file [`blog-post.js`](blog-post.js).

# Create a Page for Each Blog Post
We can programmatically have Gatsby create a page for each blog post pulled from WordPress. This is configured in [`gatsby-node.js`](gatsby-node.js)

# Showing Posts on the Index Page
Pages are stored in the `src/pages` folder, we'll be editing [`index.js`](index.js).
