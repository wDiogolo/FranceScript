const core = require('./core'),
fs = require('fs'),
chalk = require("chalk");

(async function(){
	let argv = process.argv.slice(2);
	let filePath = argv[1];
	
	switch(argv[0]){
		case "compile":
			try {
				if(!filePath){
					console.log(chalk.redBright("Veuillez spécifier le chemin jusqu'au fichier!"));
					return process.exit(1);
				}
				else if(fs.existsSync(filePath)){
					console.log(chalk.redBright("Fichier introuvable"));
					return process.exit(1);
				}
				
				console.log(chalk.yellowBright("Compilation en cours..."));
				
				let fileName = filePath.split("/").pop().split(".")[0];
				let fileContent = fs.readFileSync(filePath).toString();
				let compiledContent = core.compile(fileContent, "fr");
				let compilePath = filePath.split("/").slice(0, 1).join("/") + fileName + ".fr";
				
				fs.writeFileSync(compilePath, compiledContent, "utf8");
				
				console.log(chalk.green("Le fichier a été compilé avec succès vers : " + compilePath));
			}
			catch(ex) {
				console.log(chalk.redBright("Une erreur est survenue pendant la compilation du fichier\n " + ex.message));
			}
		break;
		
		case "run":
			try {
				if(!filePath){
					console.log(chalk.redBright("Veuillez spécifier le chemin jusqu'au fichier!"));
					return process.exit(1);
				}
				else if(fs.existsSync(filePath)){
					console.log(chalk.redBright("Fichier introuvable"));
					return process.exit(1);
				}
				
				console.log(chalk.yellowBright("Compilation en cours..."));
				
				let fileName = filePath.split("/").pop().split(".")[0];
				let fileContent = fs.readFileSync(filePath).toString();
				let compiledContent = core.compile(fileContent, "fr");
				
				console.log(chalk.green("Le fichier a été compilé avec succès, execution..."));
				
				eval(compiledContent);
			}
			catch(ex) {
				console.log(chalk.redBright("Une erreur est survenue pendant l'execution du fichier\n " + ex.message));
			}
		break;
		
		default:
			console.log("Usage : france <compile|run> <filePath>");
		break;
	}
})();