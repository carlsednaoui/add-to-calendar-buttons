var gulp       = require('gulp')
,   path       = require('path')
,   watch      = require('gulp-watch')
,   source     = require('vinyl-source-stream')
,   browserify = require('browserify')
,   wrap       = require('gulp-wrap-umd')
,   buffer     = require('gulp-buffer');

gulp.task('default', function() {
  gulp.run('build', 'minify');
});

gulp.task('build', function() {
  // start browserify and compile the file from coffee
  // use bundle to return a readable stream of the compiled contents
  // this stream will be passed to gulp
  // .pipe(source('ouical.js')) is the transition from browserify to gulp
  // we use buffer because wrap-umd does not have streaming support

  browserify(path.join(__dirname, 'src/ouical.coffee'))
    .transform('coffeeify')
    .bundle()
    .pipe(source('ouical.js'))
    .pipe(buffer())
    .pipe(wrap({ namespace: 'Ouical',
      deps: [
        { name: 'moment', globalName: 'moment', paramName: 'moment' }
      ]
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('minify', function() {
  browserify(path.join(__dirname, 'src/ouical.coffee'))
    .transform('coffeeify')
    .transform({ global: true }, 'uglifyify')
    .bundle()
    .pipe(source('ouical.min.js'))
    .pipe(buffer())
    .pipe(wrap({ namespace: 'Ouical',
      deps: [
        { name: 'moment', globalName: 'moment', paramName: 'moment' }
      ]
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
  gulp.watch('src/ouical.coffee', ['default']);
});
