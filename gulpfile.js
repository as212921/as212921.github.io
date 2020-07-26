'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')

sass.compiler = require('sass')

gulp.task('css', function () {
    return gulp.src('./src/app.scss')
        .pipe(sass({
            includePaths: ['./node_modules'],
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./assets'))
})