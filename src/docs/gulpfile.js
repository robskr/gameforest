/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.0
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */

const gulp            = require('gulp');
const browserSync     = require('browser-sync');
const stylelint       = require('gulp-stylelint');
const sass            = require('gulp-sass');
const postcss         = require('gulp-postcss');
const sourcemaps      = require('gulp-sourcemaps');
const uglify          = require('gulp-uglify-es').default;
const concat          = require('gulp-concat');
const fs              = require('fs');
const rename          = require('gulp-rename');
const twig            = require('gulp-twig');
const prettify        = require('gulp-jsbeautifier');
const merge           = require('gulp-merge-json');
const changed         = require('gulp-changed');

/**
 * ------------------------------------------------------------------------
 * CONFIGURATION
 * ------------------------------------------------------------------------
 */

const config = {
    host: '../../'
}

/**
 * ------------------------------------------------------------------------
 * PATHS
 * ------------------------------------------------------------------------
 */

const path = {
    src: {
        scss:    '../../src/docs/scss/**/*.scss',
        js:      '../../src/docs/js/docs.js',
        json:    '../../src/docs/json/components.json',
        twig:    '../../src/docs/twig/*.twig',
        views:   '../../src/docs/twig/views/*.twig'
    },
    dist: {
        css:     '../../docs/css',
        js:      '../../docs/js',
        json:    '../../docs/json',
        html:    '../../docs'
    }
}

/**
 * ------------------------------------------------------------------------
 * STYLESHEET
 * ------------------------------------------------------------------------
 */

function scss() {
    return gulp.src(path.src.scss)
        .pipe(stylelint({
            failAfterError: false,
            reporters: [
                {formatter: 'string', console: true}
            ],
            debug: true
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(postcss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(path.dist.css))
}

/**
 * ------------------------------------------------------------------------
 * JAVASCRIPT
 * ------------------------------------------------------------------------
 */

function javascript() {
    return gulp.src(path.src.js)
        .pipe(concat('docs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.dist.js))
}

/**
 * ------------------------------------------------------------------------
 * JSON DATA
 * ------------------------------------------------------------------------
 */

function json() {
    return gulp.src(path.src.json)
        .pipe(gulp.dest(path.dist.json))
}

/**
 * ------------------------------------------------------------------------
 * BUILD HTML
 * ------------------------------------------------------------------------
 */

function html() {
    return gulp.src(path.src.twig)
        .pipe(changed(path.dist.html, {
            extension: '.html'
        }))
        .pipe(twig({
            base: '../../src/docs/twig/views',
            data: JSON.parse(fs.readFileSync('../../src/json/dist/theme.json'))
        }))
        .pipe(prettify({
            unformatted: ['span', 'i'],
            extra_liners: ' ',
            max_preserve_newlines: 0
        }))
        .pipe(gulp.dest(path.dist.html))
        .pipe(browserSync.stream())
}

function compile() {
    return gulp.src(path.src.twig)
        .pipe(twig({
            base: '../../src/docs/twig/views',
            data: JSON.parse(fs.readFileSync('../../src/json/dist/theme.json'))
        }))
        .pipe(prettify({
            unformatted: ['span', 'i'],
            extra_liners: ' ',
            max_preserve_newlines: 0
        }))
        .pipe(gulp.dest(path.dist.html))
        .pipe(browserSync.stream())
}

/**
 * ------------------------------------------------------------------------
 * LOCALHOST
 * ------------------------------------------------------------------------
 */

function browser() {
    return browserSync.init({
        files : [
            '../../dist/css/theme.min.css',
            '../../docs/css/docs.min.css',
            '../../docs/*.html',
            '../../dist/js/theme.bundle.min.js',
            '../../docs/js/docs.min.js'
        ],
        notify: false,
        server: {
            baseDir: config.host,
            routes: {
                "/": "../../dist"
            }
        },
        startPath: '/docs'
    })
}

/**
 * ------------------------------------------------------------------------
 * BUILD TASK
 * ------------------------------------------------------------------------
 */

const build = {
    dev:         gulp.parallel(watch, browser),
    css:         scss,
    js:          javascript,
    json:        gulp.series(json, compile),
    html:        html,
    compile:     compile
}

/**
 * ------------------------------------------------------------------------
 * WATCH FILES
 * ------------------------------------------------------------------------
 */

function watch() {
    gulp.watch(path.src.json,  build.json)
    gulp.watch(path.src.js,    build.js)
    gulp.watch(path.src.twig,  build.html)
    gulp.watch(path.src.views, build.compile)
    gulp.watch(path.src.scss,  build.css)
}

/**
 * ------------------------------------------------------------------------
 * GULP TASKS
 * ------------------------------------------------------------------------
 */

gulp.task('html', build.html)
gulp.task('compile', build.compile)
gulp.task('json', build.json)
gulp.task('css', build.css)
gulp.task('js', build.js)
gulp.task('default', build.dev)
