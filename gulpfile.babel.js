'use strict';

// Non Gulp npm modules
import del from 'del';

// Gulp Modules
import gulp from 'gulp';
import gutil from 'gulp-util';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

const sassRoot = './public/scss';
const cssRoot = './public/css';

function handleError(err) {
  console.log(err.toString());
}

// ############################################################################################
// ############################################################################################

gulp.task('clean:styles', (cb) => {
  del([
    '**/.sass-cache/**',
  ], cb);
});

gulp.task('build-sass', () => {
  return gulp.src(sassRoot+'/*.scss')
    .pipe($.plumber())
    .pipe($.notify('Compile Sass File: <%= file.relative %>...'))
    .pipe($.sourcemaps.init())
    .pipe($.autoprefixer('last 10 versions'))
    .pipe($.sass({
      style: 'compressed'
    })).on('error', handleError)
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(cssRoot));
});

// ############################################################################################
// ############################################################################################

gulp.task('watch-sass', () => {
  $.notify('Sass Stream is Active...');
  gulp.watch(sassRoot+'/**/*.scss', ['build-sass']);
});

// ############################################################################################
// ############################################################################################

gulp.task('default', ['build-sass']);
gulp.task('clean', ['clean:styles']);
gulp.task('watch', ['watch-sass']);
