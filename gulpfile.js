const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const gutil = require('gulp-util');

gulp.task('default', () => {
  browserify({
    entries: 'app/driver.js',
    debug: true
  })
  .bundle()
  .on('error', gutil.log)
  .pipe(source('driver.js'))
  .on('error', gutil.log)
  .pipe(gulp.dest('./dist'))
  .on('error', gutil.log)
});