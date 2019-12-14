const browserify = require('./gulp/browserify');
const gulp = require('gulp');

gulp.task('build', browserify('./src/browser', './dist/francescript.min.js'));
