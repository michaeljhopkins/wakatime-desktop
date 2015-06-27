'use strict';

import del from 'del';
import gulp from 'gulp';
import gutil from 'gulp-util';
import gulpLoadPlugins from 'gulp-load-plugins';

const plugins = gulpLoadPlugins();

const sassRoot = './src/scss';
const cssRoot = './dist/css';

const jsxRoot = './src/app';
const jsRoot = './dist/js';

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
    .pipe(plugins.plumber())
    .pipe(plugins.notify('Compile Sass File: <%= file.relative %>...'))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.autoprefixer('last 10 versions'))
    .pipe(plugins.sass({
      style: 'compressed'
    })).on('error', handleError)
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(cssRoot));
});

gulp.task('build-jsx', function() {
  return gulp.src(jsxRoot+'/**/*.jsx')
    .pipe(plugins.browserify({
      transform: ['babelify']
    }))
    .pipe(plugins.rename(function(path) {
      path.extname = ".js";
    }))
    .pipe(gulp.dest(jsRoot));
});

// ############################################################################################
// ############################################################################################

gulp.task('watch-sass', () => {
  plugins.notify('Sass Stream is Active...');
  gulp.watch(sassRoot+'/**/*.scss', ['build-sass']);
});

// ############################################################################################
// ############################################################################################

gulp.task('default', ['build-sass', 'build-jsx']);
gulp.task('clean', ['clean:styles']);
gulp.task('watch', ['watch-sass']);
