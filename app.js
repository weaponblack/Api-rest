/** packages */
const express  = require("express");
const config = require("config");

/** app configuration */

const app = express();
const port = config.get("server-port");

app.listen(port,() => {
    console.log("Server is running...")
})