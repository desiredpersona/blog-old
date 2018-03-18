const gulp = require('gulp')
const purgecss = require('gulp-purgecss')

// Run `gulp purgecss` to remove unused CSS.
gulp.task('purgecss', () => {
  return gulp
    .src('_site/**/*.css')
    .pipe(
      purgecss({
        content: ['_site/**/*.html']
      })
    )
    .pipe(gulp.dest('_site/'))
})