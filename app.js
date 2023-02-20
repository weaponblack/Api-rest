/** packages */
const express  = require("express");
const config = require("config");
const bodyParser = require("body-parser")
/** app configuration */

const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncondedParser = bodyParser.urlencoded(
    {extended : true}
);

app.use(jsonParser);
app.use(urlEncondedParser)
/** Methods  */
app.get("/", (req,res,next) => {
    res.send("Welcome to programación 3")
})

const personRoutes = require("./routes/person.routes")
personRoutes(app);

app.listen(port,() => {
    console.log("Server is running...")
})