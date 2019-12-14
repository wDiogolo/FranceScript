const
  core = require('./core'),
  fs = require('fs');

let
  filepath = process.argv[2];

if (!filepath) {
    console.log('Missing filename argument.');
    console.log('Usage: filename');
    return process.exit();
}

fs.readFile(filepath, 'utf8', function (err, content) {
    if (err) {
        console.error(err);
        return process.exit(1);
    }

    eval(core.compile(content, "fr")));
});