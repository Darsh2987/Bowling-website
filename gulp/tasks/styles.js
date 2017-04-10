var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssImport = require('postcss-import');

gulp.task('styles', function() {
  return gulp.src('./assets/css/imports.css')
  .pipe(postcss([cssImport, autoprefixer]))
  .on('error', function(errorInfo) {
    console.log(errorInfo.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('./temp/styles'));
});
