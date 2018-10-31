var express = require ("express");
var bodyParser = require ("body-parser");
var exphbs = require ("express-handlebars");

var app = express();
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
    extended: true
}) && bodyParser.json())
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes =require("./controllers/routes.js");
app.use("/", routes);

var port = 3000;
app.listen(port);

