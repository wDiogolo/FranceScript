const
  browserify = require('./gulp/browserify'),
  gulp = require('gulp'),
  package = require('./package.json');

gulp.task('build', browserify('./src/browser', './dist/france.min.js', {
  license: `/* FranceScript v${package.version} */`
}));
gulp.task('watch', () => gulp.watch('./src', ['build']));

gulp.task('default', ['build']);
