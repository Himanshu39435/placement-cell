//Require the Environment File for getting the Environment Variables
const env = require("./environment");

//------------Export the View Helpers------------
module.exports = (app) => {

  app.locals.assetPath = (filePath) => {

    // Development
    if (env.name === "development") {
      return "/" + filePath;
    }

    // Production (No rev-manifest)
    return "/" + filePath;
  };

};
//-----------------------------------------------
