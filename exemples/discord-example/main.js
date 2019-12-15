const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");
client.modules = new Discord.Collection();


fs.readdir("./modules/", (e, files) => {

if(e) return console.log("erreur pour lire dans le dossier: " + e.stack);

let frjsfiles = files.filter(f => f.split(".").pop() === "js" || "fr");

if(frjsfiles.length === 0) return console.log("Module avec 0 fichiers en js ou fr !!")

frjsfiles.forEach((f) => {

let modulesloads = require(`./modules/${f}`);
console.log("[LOADING]" + f);
client.modules.set(modulesloads.help.name, modulesloads);

})

})


client.on("ready", function() {

console.log("Bot on !");

})

client.on("message", async message => {

const msgargs = message.content.split(/\s+/g);
const cmdargs = msgargs[0];
const args = msgargs[1];

if(!cmdargs.startsWith(config.prefix)) return;

let cmds = client.modules.get(cmdargs.slice(config.prefix.length));

if(cmds) cmds.run(client, message, args);

})

client.login(config.token)