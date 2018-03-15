const gulp = require('gulp')
const purgecss = require('gulp-purgecss')

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