/**
 * Created by zura on 12/10/2017.
 */

'use strict';

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const babel = require('gulp-babel');


gulp.task('scripts', function () {
  gulp.src([
    './src/*.module.js',
    './src/*.js'
  ])
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(concat('lobipanel-angularjs.js'))
    .pipe(gulp.dest('./'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./'))
  ;
});

gulp.task('copy', function () {
  gulp.src('./bower_components/lobipanel/dist/js/*.js')
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*.js', ['scripts']);
});

gulp.task('default', ['scripts', 'copy'], () => {
  gulp.start('watch');
});