You can setup Gatsby in any number of ways. In this example I'll be using Visual Studio Code (VSC).

1. Create a folder which will contain your Gatsby environment (e.g. wp-gatsby).
1. Open VSC.
1. Press Ctrl+Shift+P (or navigate to View --> Command Palette) to display the Command Palette prompt.
1. Begin entering "Remote-Containers: Add Development Container Configuration Files", select this option when it appears.
1. Choose Show All Definitions.
1. Choose Node.js.
1. You will be prompted to reload the current project in its container, reject this and edit the devcontainer.json file inside of the .devcontainer folder that was automatically created for you.
1. To avoid issues with Node.js, add to "build" "args": { "VARIANT": "12" }.
1. Uncomment "remoteUser": "node".
1. By default these Remote-Containers use root for the user. This causes issues as Node.js doesn't like running as root.
1. Press Ctrl+Shift+P and begin entering "Remote-Containers: Reopen in Remote Container".
1. VSC will spin up a new container for you (this only needs happen once), once it has been successfull created open a Terminal (Ctrl+Shift+`) and you'll be accessing the container's shell rather than your local one.
