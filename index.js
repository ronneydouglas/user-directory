const express = require("express");
const mustacheExpress = require("mustache-express");
const data = require("./data.js");

const app = express();

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("index", data);

    console.log("Don't it make you feel good?");
});


app.listen(3000, function() {
    console.log("All good so far")
});
