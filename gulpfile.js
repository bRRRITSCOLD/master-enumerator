const gulp = require('gulp');
const del = require('del'); //eslint-disable-line

gulp.task('transfer:js', (done) => {
  gulp.src('src/*.js')
    .pipe(gulp.dest('build/dist'))
    .on('end', () => {
      done();
    })
    .on('error', (err) => {
      done(err);
    });
});

gulp.task('transfer:build', (done) => {
  gulp.src('build/dist/*')
    .pipe(gulp.dest('dist'))
    .on('end', () => {
      done();
    })
    .on('error', (err) => {
      done(err);
    });
});

gulp.task('clean:post', (done) => {
  del(['build/tmp', 'build/dist', 'build'], done());
});

gulp.task('default', gulp.series(
  'transfer:js',
  'transfer:build',
  'clean:post'
));
