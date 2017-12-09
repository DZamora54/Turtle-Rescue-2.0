var admin = require("firebase-admin");

var serviceAccount = require("./config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://turtle-project-2-8bb11.firebaseio.com"
});

module.exports = admin;