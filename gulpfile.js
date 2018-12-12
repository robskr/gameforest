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

const gulp            = require('gulp')
const browserSync     = require('browser-sync')
const stylelint       = require('gulp-stylelint')
const sass            = require('gulp-sass')
const postcss         = require('gulp-postcss')
const sourcemaps      = require('gulp-sourcemaps')
const iconfont        = require('gulp-iconfont')
const imagemin        = require('gulp-image')
const iconfontcss     = require('gulp-iconfont-css')
const rollup          = require('rollup-stream')
const uglify          = require('gulp-uglify-es').default
const source          = require('vinyl-source-stream')
const eslint          = require('gulp-eslint')
const concat          = require('gulp-concat')
const fs              = require('fs')
const rename          = require('gulp-rename')
const twig            = require('gulp-twig')
const prettify        = require('gulp-jsbeautifier')
const merge           = require('gulp-merge-json')
const changed         = require('gulp-changed')
const clean           = require('gulp-clean')

/**
 * ------------------------------------------------------------------------
 * CONFIGURATION
 * ------------------------------------------------------------------------
 */

const config = {
    host: './',
    font: {
        name: 'nucleo',
        class: 'ya'
    },
}

/**
 * ------------------------------------------------------------------------
 * PATHS
 * ------------------------------------------------------------------------
 */

const path = {
    src: {
        scss:    './src/scss/**/*.scss',
        js:      './src/js/**/*.js',
        svg:     './src/svg/*.svg',
        json:    './src/json/src/*.json',
        img:     './src/img/*',
        twig:    './src/twig/*.twig',
        views:   './src/twig/views/*.twig'
    },
    dist: {
        css:     './dist/css',
        js:      './dist/js',
        svg:     './dist/fonts',
        json:    './src/json/dist',
        img:     './dist/img',
        html:    './dist',
        plugins: './dist/plugins/*'
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

function lint() {
    return gulp.src(path.src.js)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
}

function babel() {
    return rollup('./rollup.config.js')
        .pipe(source('theme.js'))
        .pipe(gulp.dest(path.dist.js))
}

function minify() {
    return gulp.src('./dist/js/theme.js')
        .pipe(concat('theme.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.dist.js))
}

function script() {
    return gulp.src([
            'node_modules/webfontloader/webfontloader.js',
            'node_modules/owl.carousel/dist/owl.carousel.min.js',
            'node_modules/jquery-sticky/jquery.sticky.js',
            './dist/js/theme.js'
        ])
        .pipe(concat('theme.bundle.js'))
        .pipe(gulp.dest(path.dist.js))
        .pipe(concat('theme.bundle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.dist.js))
}

/**
 * ------------------------------------------------------------------------
 * IMAGES
 * ------------------------------------------------------------------------
 */

function image() {
    return gulp.src(path.src.img)
        .pipe(changed(path.dist.img))
        .pipe(imagemin({
            mozjpeg: ['-quality', 90]
        }))
        .pipe(gulp.dest(path.dist.img))
        .pipe(browserSync.stream())
}

/**
 * ------------------------------------------------------------------------
 * BUILD HTML
 * ------------------------------------------------------------------------
 */

function json() {
    return gulp.src(path.src.json)
        .pipe(merge({ fileName: 'theme.json' }))
        .pipe(gulp.dest(path.dist.json))
}

function html() {
    return gulp.src(path.src.twig)
        .pipe(changed(path.dist.html, {
            extension: '.html'
        }))
        .pipe(twig({
            base: './src/twig/views',
            data: JSON.parse(fs.readFileSync('./src/json/dist/theme.json'))
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
            base: './src/twig/views',
            data: JSON.parse(fs.readFileSync('./src/json/dist/theme.json'))
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
 * ICONS
 * ------------------------------------------------------------------------
 */

function svg() {
    return gulp.src(path.src.svg)
        .pipe(iconfontcss({
            fontName: config.font.name,
            path: './src/fonts/icons.sass',
            targetPath: '../scss/parent/_icons.scss',
            fontPath: '../fonts/',
            cssClass: config.font.class
        }))
        .pipe(iconfont({
            centerHorizontally: true,
            fontName: config.font.name,
            normalize: true,
            fontHeight: 1024,
            descent: 127,
            formats: ['ttf', 'eot', 'woff', 'svg']
        }))
        .pipe(gulp.dest('./src/fonts'))
}

function svg_copy() {
    return gulp.src(['./src/fonts/*', '!./src/fonts/icons.sass' ]).pipe(gulp.dest(path.dist.svg))
}

/**
 * ------------------------------------------------------------------------
 * LOCALHOST
 * ------------------------------------------------------------------------
 */

function browser() {
    return browserSync.init({
        files : [
            path.dist.css    + '/theme.min.css',
            path.dist.js     + '/theme.bundle.min.js'
        ],
        notify: false,
        server: {
            baseDir: config.host,
            routes: {
                "/": "dist"
            }
        }
    })
}

/**
 * ------------------------------------------------------------------------
 * PLUGINS
 * ------------------------------------------------------------------------
 */

function clear() {
    return gulp.src(path.dist.plugins, {read: false})
        .pipe(clean());
}

function bootstrap()        { return gulp.src('./node_modules/bootstrap/dist/**/*').pipe(gulp.dest('./dist/plugins/bootstrap')) }
function jquery()           { return gulp.src('./node_modules/jquery/dist/**/*').pipe(gulp.dest('./dist/plugins/jquery')) }
function popper()           { return gulp.src('./node_modules/popper.js/dist/umd/**/*').pipe(gulp.dest('./dist/plugins/popper')) }
function fontawesome()      { return gulp.src(['node_modules/@fortawesome/fontawesome-free/*', 'node_modules/@fortawesome/fontawesome-free/*/*', '!node_modules/@fortawesome/fontawesome-free/js', '!node_modules/@fortawesome/fontawesome-free/js/*', '!node_modules/@fortawesome/fontawesome-free/svgs', '!node_modules/@fortawesome/fontawesome-free/svgs/*', '!node_modules/@fortawesome/fontawesome-free/sprites', '!node_modules/@fortawesome/fontawesome-free/sprites/*', '!node_modules/@fortawesome/fontawesome-free/less', '!node_modules/@fortawesome/fontawesome-free/less/*']).pipe(gulp.dest('./dist/plugins/fontawesome')) }
function ckeditor()         { return gulp.src('./node_modules/@ckeditor/ckeditor5-build-classic/build/**/*').pipe(gulp.dest('./dist/plugins/ckeditor')) }
function easypiechart()     { return gulp.src('./node_modules/easy-pie-chart/dist/**/*').pipe(gulp.dest('./dist/plugins/easypiechart')) }
function bootstrap_select() { return gulp.src('./node_modules/bootstrap-select/dist/**/*').pipe(gulp.dest('./dist/plugins/bootstrap-select')) }
function flatpickr()        { return gulp.src('./node_modules/flatpickr/dist/**/*').pipe(gulp.dest('./dist/plugins/flatpickr')) }
function sticky()           { return gulp.src('./node_modules/jquery-sticky/**/*').pipe(gulp.dest('./dist/plugins/jquery-sticky')) }
function datatables()       { return gulp.src(['./node_modules/datatables.net-bs4/**/*', './node_modules/datatables.net/**/*']).pipe(gulp.dest('./dist/plugins/datatables')) }
function morris()           { return gulp.src(['./node_modules/morris.js/morris.css', './node_modules/morris.js/morris.js', './node_modules/morris.js/morris.min.js']).pipe(gulp.dest('./dist/plugins/morris')) }
function raphael()          { return gulp.src(['./node_modules/raphael/raphael.js', './node_modules/raphael/raphael.min.js']).pipe(gulp.dest('./dist/plugins/raphael')) }
function parallax()         { return gulp.src('./node_modules/jquery-parallax.js/*').pipe(gulp.dest('./dist/plugins/parallax')) }
function countdown()        { return gulp.src('./node_modules/jquery-countdown/dist/*').pipe(gulp.dest('./dist/plugins/jquery-countdown')) }
function nouislider()       { return gulp.src('./node_modules/nouislider/distribute/*').pipe(gulp.dest('./dist/plugins/nouislider')) }
function lazysizes()        { return gulp.src(['./node_modules/lazysizes/lazysizes.js', './node_modules/lazysizes/lazysizes.min.js']).pipe(gulp.dest('./dist/plugins/lazysizes')) }

/**
 * ------------------------------------------------------------------------
 * BUILD TASK
 * ------------------------------------------------------------------------
 */

const build = {
    dev:         gulp.parallel(watch, browser),
    css:         scss,
    image:       image,
    js:          gulp.series(babel, minify, script, lint),
    html:        html,
    compile:     compile,
    json:        gulp.series(json, compile),
    icon:        gulp.series(svg, svg_copy),
    plugins:     gulp.series(clear, bootstrap, jquery, popper, fontawesome, ckeditor, easypiechart, bootstrap_select, flatpickr, sticky, datatables, morris, raphael, parallax, countdown, nouislider, lazysizes)
}

/**
 * ------------------------------------------------------------------------
 * WATCH FILES
 * ------------------------------------------------------------------------
 */

function watch() {
    gulp.watch(path.src.twig,  { events: ['change', 'unlink'] }, build.html)
    gulp.watch(path.src.views, { events: ['change', 'unlink'] }, build.compile)
    gulp.watch(path.src.json,  { events: ['change', 'unlink'] }, build.json)
    gulp.watch(path.src.scss,  { events: ['change', 'unlink'] }, build.css)
    gulp.watch(path.src.js,    { events: ['change', 'unlink'] }, build.js)
    gulp.watch(path.src.img,   { events: ['change', 'unlink'] }, build.image)
    gulp.watch(path.src.svg,   { events: ['change', 'unlink'] }, build.icon)
}

/**
 * ------------------------------------------------------------------------
 * GULP TASKS
 * ------------------------------------------------------------------------
 */

gulp.task('icon',       build.icon)
gulp.task('html',       build.html)
gulp.task('compile',    build.compile)
gulp.task('css',        build.css)
gulp.task('js',         build.js)
gulp.task('image',      build.image)
gulp.task('plugins',    build.plugins)
gulp.task('default',    build.dev)
