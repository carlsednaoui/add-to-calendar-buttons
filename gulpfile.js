var gulp   = require('gulp')
,   coffee = require('gulp-coffee')
,    watch = require('gulp-watch');

gulp.task('default', function() {
  gulp.src('src/ouical.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
  gulp.watch('src/ouical.coffee', ['default']);
});
