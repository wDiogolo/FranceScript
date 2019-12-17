const express = require("express");
var app = express();

app.get("/*", function(req, res) {
	res.end("Hello world !");
})

app.listen("80", function() { 
	console.log("Le serveur écoute sur le port 80 !");
})