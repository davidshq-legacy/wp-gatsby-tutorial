# Setup Gatsby Environment 
You can setup Gatsby in any number of ways. In this example I'll be using Visual Studio Code (VSC).

1. Create a folder which will contain your Gatsby environment (e.g. wp-gatsby).
2. Open VSC.
3. Press Ctrl+Shift+P (or navigate to View --> Command Palette) to display the Command Palette prompt.
4. Begin entering "Remote-Containers: Add Development Container Configuration Files", select this option when it appears.
5. Choose Show All Definitions.
6. Choose Node.js.
7. You will be prompted to reload the current project in its container, reject this and edit the devcontainer.json file inside of the .devcontainer folder that was automatically created for you.
8. To avoid issues with Node.js, add to `"build"` `"args": { "VARIANT": "12" }`.
9. Uncomment `"remoteUser": "node"`.
    - By default these Remote-Containers use root for the user. This causes issues as Node.js doesn't like running as root.
    - Note, when uncommenting configurations in devcontainer.json you will need to add a `,` at the end of the configuration, e.g. `"remoteUser": "node",`.
10. Uncomment `"fordwardPorts": []` and add within the `[]` the default port used by Gatsby's dev server (8000), e.g.: `"forwardPorts": [8000]`. This ensures you are able to view the Gatsby site on your local system.    
11. Press Ctrl+Shift+P and begin entering "Remote-Containers: Reopen in Remote Container".
12. VSC will spin up a new container for you (this only needs happen once), once it has been successfull created open a Terminal (Ctrl+Shift+\`) and you'll be accessing the container's shell rather than your local one.

# Install Gatsby
1. Run `npm install -g gatsby-cli`
2. It will take several moments for npm to download and install the necessary packages.
2. Create a new gatsby instance by running `gatsby new wpgatsby` (the name wpgatsby can be anything you desire).
3. It will take more time for npm to download and install the necessary packages.
4. If prompted to choose a package manager and you don't have a preference, choose npm.
5. With any luck you'll get the message: "Your new Gatsby website has been successfully bootstrapped."
6. Enter into the gatsby site directory: `cd wpgatsby`.
