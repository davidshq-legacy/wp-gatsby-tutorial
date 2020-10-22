# Using WordPress with Gatsby Tutorial
I spent a lot(!) of time getting WordPress and Gatsby working together and then Gatsby improved the integration with `gatsby-source-wordpress-experimental`. At the time I wrote this article there wasn't a guide I found sufficient on implementing the new methodology - so here we are.

This tutorial walks you through the basic process of setting up WP and Gatsby and then pulling (post/page) data from WP into Gatsby. Unfortunately, at this time it doesn't include anything beyond this - e.g. adding menus from WP.

# Setup WordPress
1. Use an existing WordPress site or setup a new site.
2. Download, install, and activate the [WPGraphQL plugin](https://github.com/TylerBarnes/using-gatsby-source-wordpress-experimental/tree/master/WordPress/plugins) from GitHub.
3. Download, install, and activate the [WP-Gatsby plugin](https://github.com/TylerBarnes/using-gatsby-source-wordpress-experimental/tree/master/WordPress/plugins) from GitHub.

# Setup Gatsby Environment
For [step-by-step instructions on setting up a Gatsby environment](https://github.com/davidshq/wp-gatsby-tutorial/blob/master/SetupGatsby.md), I use VS Code to accomplish this quickly.

# Add the WordPress Source Plugin to Gatsby
You'll now need to install `gatsby-source-wordpress-experimental` into your Gatsby instance so that Gatsby can use data coming from your WordPress site.
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

# Publishing Your Gatsby Site
You can publish your site by running `gatsby build` and then copying the contents of the resulting public folder onto your host. This is super simple (and free) to do with [Surge](https://surge.sh/) or [Netlify](https://www.netlify.com/), I'd recommend using one of them.
