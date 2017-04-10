var gulp = require('gulp');
var watch = require('gulp-watch');
browserSync = require('browser-sync').create();

gulp.task('watch', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "./"
    }
  });

  watch('./index.html', function() {
    browserSync.reload();
  });

  watch('./assets/css/**/*.css', function() {
    gulp.start('cssInject');
  });

  watch('./assets/js/**/*.js', function() {
    gulp.start('scriptsRefresh');
  })

});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./temp/styles/imports.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
});
