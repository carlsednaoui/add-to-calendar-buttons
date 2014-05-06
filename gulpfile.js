var gulp       = require('gulp')
,   path       = require('path')
,   watch      = require('gulp-watch')
,   source     = require('vinyl-source-stream')
,   browserify = require('browserify');

gulp.task('default', function() {
  gulp.run('build', 'minify');
});

gulp.task('build', function() {
  // start browserify and compile the file from coffee
  // use bundle to return a readable stream of the compiled contents
  // this stream will be passed to gulp
  browserify(path.join(__dirname, 'src/ouical.coffee'))
    .transform('coffeeify')
    .bundle()
    .pipe(source('ouical.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('minify', function() {
  // start browserify and compile the file from coffee
  // use bundle to return a readable stream of the compiled contents
  // this stream will be passed to gulp
  browserify(path.join(__dirname, 'src/ouical.coffee'))
    .transform('coffeeify')
    .transform({ global: true }, 'uglifyify')
    .bundle()
    .pipe(source('ouical.min.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
  gulp.watch('src/ouical.coffee', ['default']);
});
