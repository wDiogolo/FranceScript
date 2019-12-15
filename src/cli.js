#!/usr/bin/env node

const { compile } = require("./core");
const { realpath, readFileSync, existsSync, readdirSync, lstatsSync, writeFileSync } = require("fs");
const { redBright, yellow, green } = require ("chalk");
const { spawn, exec } = require("child_process");
const version = require("../package.json");

(async function(){
	let argv = process.argv.slice(2);
	let filePath = argv[1];
	
	switch(argv[0]){
		case "compile":
			try {
				if(!filePath){
					console.log(redBright("Veuillez spécifier le chemin jusqu'au fichier!"));
					return process.exit(1);
				}
				else if(!existsSync(filePath)){
					console.log(redBright("Fichier introuvable"));
					return process.exit(1);
				}
				
				console.log(yellow("Compilation en cours..."));
				
				let file = filePath.split("/").pop();
				let fileName = file.split(".")[0];
				
				console.log(file)
				console.log(fileName)
				console.log(filePath)
				
				if(file === "package.json"){
					let main = JSON.parse(readFileSync(filePath)).main.split("./")[0].split("/")[0];
					let ls = lstatsSync(main);
					
					if(ls.isDirectory()){
						dir(main);
					}
					else if(ls.isFile()){
						file(fileName, filePath);
				}
			}
				
				console.log(green("Le projet a été compilé avec succès vers : " + compilePath));
			}
			catch(ex) {
				console.log(redBright("Une erreur est survenue pendant la compilation du fichier\n " + ex.stack));
			}
		break;
		
		case "run":
			try {
				if(!filePath){
					console.log(redBright("Veuillez spécifier le chemin jusqu'au fichier!"));
					return process.exit(1);
				}
				else if(!existsSync(filePath)){
					console.log(redBright("Fichier introuvable"));
					return process.exit(1);
				}
				
				console.log(yellow("Compilation en cours..."));
				
				let fileName = filePath.split("/").pop().split(".")[0];
				let fileContent = readFileSync(filePath).toString();
				let compiledContent = compile(fileContent, "fr");
				let compiledPath = "./" + fileName + ".js";
				
				writeFileSync(compiledPath, compiledContent, "utf8");
				console.log(green("Le fichier a été compilé avec succès, execution..."));
				
				let child = spawn("node", [compiledPath]);
				
				child.stdout.on("data", (data) => {
					console.log(data.toString());
				});
				child.on("error", (error) => {
					console.log("Program exited with an error\n " + error.stack);
				});
				child.on("exit", (code) => {
					console.log("Program exited with code : " + code);
				});
			}
			catch(ex) {
				console.log(redBright("Une erreur est survenue pendant l'execution du fichier\n " + ex.stack));
			}
		break;
		
		case "up":
			console.log(yellow("Mise à jour de FranceScript..."));
			exec("npm install --global github:Seyz123/FranceScript", null, (error, stdout) => {
				if(error){
					console.log(redBright("Impossible de mettre à jour FranceScript !\n " + error.stack));
					return process.exit(1);
				}
				
				console.log(green(stdout));
				console.log(green("FranceScript a été mis à jour!"));
			});
		break;
		
		default:
			console.log("Usage : france <compile|run|up> <filePath>");
		break;
	}
})();

function file(fileName, path){
	let fileContent = readFileSync(filePath).toString();
	let compiledContent = compile(fileContent, "fr");
	let compilePath = main.split("/").slice(0, 1) + fileName + ".js";
					
	writeFileSync(compilePath, compiledContent, "utf8");
	
	console.log("Ficher " + fileName + " compilé.");
}

function dir(path){
	let files = readdirSync(path);
	
	files.forEach(function(file){
		if(file.isDir()){
			dir(file.path);
		}
		else if(file.isFile()){
			if(file.name.split(".").pop() !== "fr") {
				return;
			}
			
			file(file.path);
		}
	});
}