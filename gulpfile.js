const gulp = require('gulp');
const minify = require('gulp-minify');
const jsonminify = require('gulp-jsonminify');
const del = require('del'); //eslint-disable-line

gulp.task('copy:md', (done) => {
  gulp.src('*.md')
    .pipe(gulp.dest('build/dist'))
    .on('end', () => {
      done();
    })
    .on('error', (err) => {
      done(err);
    });
});

gulp.task('copy:lsc', (done) => {
  gulp.src('LICENSE')
    .pipe(gulp.dest('build/dist'))
    .on('end', () => {
      done();
    })
    .on('error', (err) => {
      done(err);
    });
});

gulp.task('compress:js', (done) => {
  gulp.src('src/*.js')
    .pipe(minify({
      ext: {
        src: '-debug.txt',
        min: '.js'
      },
      exclude: ['tasks'],
      ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('build/tmp'))
    .on('end', () => {
      done();
    })
    .on('error', (err) => {
      done(err);
    });
});

gulp.task('compress:json', (done) => {
  gulp.src(['*.json'])
    .pipe(jsonminify())
    .pipe(gulp.dest('build/tmp'))
    .on('end', () => {
      done();
    })
    .on('error', (err) => {
      done(err);
    });
});

gulp.task('transfer:js', (done) => {
  gulp.src('build/tmp/*.js')
    .pipe(gulp.dest('build/dist'))
    .on('end', () => {
      done();
    })
    .on('error', (err) => {
      done(err);
    });
});

gulp.task('transfer:json', (done) => {
  gulp.src('build/tmp/*.json')
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
  'copy:md',
  'copy:lsc',
  'compress:js',
  'compress:json',
  'transfer:js',
  'transfer:json',
  'transfer:build',
  'clean:post'
));
