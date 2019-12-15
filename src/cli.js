#!/usr/bin/env node

const { compile } = require("./core");
const { realpathSync, readFileSync, existsSync, readdirSync, lstatSync, writeFileSync } = require("fs");
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
				
				let file = filePath.replace("./", "").split("/").pop();
				let fileName = file.split(".")[0];
				
				if(file === "package.json"){
					let json = JSON.parse(readFileSync(filePath).toString());
					
					if(!json || !json.main){
						console.log(chalk.red("Fichier package.json incorrect."));
						return process.exit(1);
					}
										
					let p = json.main.replace("./", "").split("/")[0];
					let ls = lstatSync(p);
					
					if(ls.isDirectory()){
						dir(p);
					}
					else {
						pourUnFichier(fileName, p, true);
					}
				}
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
					console.log("Le programme s'est arrêté à cause d'une erreur !\n " + error.stack);
				});
				child.on("exit", (code) => {
					console.log("Le programme s'est arrêté avec le code : " + code);
				});
			}
			catch(ex) {
				console.log(redBright("Une erreur est survenue pendant l'execution du fichier !\n " + ex.stack));
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
			console.log("Usage : fsc <compile|run|up> <filePath>");
		break;
	}
})();

function dir(path){
	let files = readdirSync(path, { withFileTypes: true, encoding: "utf8" });
	
	files.forEach((frFile) => {
		if(frFile.isDirectory()){
			dir(path);
		}
		else {
			if(frFile.name.split(".").pop() !== "fr") {
				return;
			}
			
			pourUnFichier(frFile.name.split(".")[0], path + "/" + frFile.name, true);
		}
	});
}

function pourUnFichier(fileName, path){
	let fileContent = readFileSync(path).toString();
	let compiledContent = compile(fileContent, "fr");
	let fileExt = fileName + ".fr";
	let cPath = "./" + path.slice(0, -fileExt.length) + fileName + ".js";
	
	// Compiler vers ./dist/
	
	writeFileSync(cPath, compiledContent, "utf8");
	console.log("Ficher " + fileName + ".fr" + " compilé vers : " + cPath);
}