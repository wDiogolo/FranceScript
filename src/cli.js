#!/usr/bin/env node

const { compile } = require("./core");
const { realpath, readFileSync, existsSync, writeFileSync } = require("fs");
const { redBright, yellow, green } = require ("chalk");
const { exec } = require("child_process");

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
				
				let fileName = filePath.split("/").pop().split(".")[0];
				let fileContent = readFileSync(filePath).toString();
				let compiledContent = compile(fileContent, "fr");
				let compilePath = "./" + fileName + ".js";
				
				writeFileSync(compilePath, compiledContent, "utf8");
				
				console.log(green("Le fichier a été compilé avec succès vers : " + compilePath));
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
				let compilePath = realpath("./" + fileName + ".js");
				
				writeFileSync(compilePath, compiledContent, "utf8");
				console.log(green("Le fichier a été compilé avec succès, execution..."));
				
				exec("node " + compiledPath, null, (error) => {
					if(error){
						console.log(error);
						return process.exit(1);
					}
				});
			}
			catch(ex) {
				console.log(redBright("Une erreur est survenue pendant l'execution du fichier\n " + ex.stack));
			}
		break;
		
		default:
			console.log("Usage : france <compile|run> <filePath>");
		break;
	}
})();