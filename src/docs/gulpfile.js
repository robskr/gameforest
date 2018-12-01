/**
 * Gameforest Bootstrap Gaming Theme
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * Licensed under The GPLv3 License
 * For full copyright and license information, please see the LICENSE.md
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright Copyright (c) yakuthemes.com (https://yakuthemes.com)
 * @link      https://yakuthemes.com
 * @since     1.0.0
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 */
const gulp            = require('gulp');
const browserSync     = require('browser-sync');
const stylelint       = require('gulp-stylelint');
const sass            = require('gulp-sass');
const postcss         = require('gulp-postcss');
const sourcemaps      = require('gulp-sourcemaps');
const iconfont        = require('gulp-iconfont');
const imagemin        = require('gulp-image');
const iconfontcss     = require('gulp-iconfont-css');
const rollup          = require('rollup-stream');
const uglify          = require('gulp-uglify-es').default;
const source          = require('vinyl-source-stream');
const eslint          = require('gulp-eslint');
const concat          = require('gulp-concat');
const fs              = require('fs');
const rename          = require('gulp-rename');
const twig            = require('gulp-twig');
const prettify        = require('gulp-jsbeautifier');
const merge           = require('gulp-merge-json');
const changed         = require('gulp-changed');

const config = {
    env: 'dev',
    prettify: {
        indent_size: 2
    },
    font: {
        name: 'nucleo',
        class: 'ya'
    },
    localhost: {
        webroot: '../../'
    }
}

const paths = {
    css: {
        src:  '../../src/scss/**/*.scss',
        dist: '../../dist/css'
    },
    js: {
        src:  '../../src/js/**/*.js',
        dist: '../../dist/js'
    },
    svg: {
        src:  '../../src/svg/*.svg',
        dist: '../../dist/fonts'
    },
    json: {
        src:  '../../src/twig/json/src/**/*.json',
        dist: '../../src/twig/json/dist'
    },
    img: {
        src: '../../src/img/*',
        dist: '../../dist/img'
    },
    html: {
        src:   '../../src/twig/*.twig',
        dist:  '../../dist',
        views: '../../src/twig/views/*.twig'
    }
}

function cssLint() {
    return gulp.src(['src/scss/**/*.scss'])
        .pipe(stylelint({
            failAfterError: false,
            reporters: [
                {formatter: 'string', console: true}
            ],
            debug: true
        }))
}

function scss() {
    return gulp.src(paths.css.src)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(postcss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.css.dist))
}

function lint() {
    return gulp.src(['../../src/js/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
}

function babel() {
    return rollup('rollup.js')
        .pipe(source('theme.js'))
        .pipe(gulp.dest('../../dist/js'))
}

function minify() {
    return gulp.src('../../dist/js/theme.js')
        .pipe(concat('theme.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.js.dist))
}

function script() {
    return gulp.src([
            '../../node_modules/webfontloader/webfontloader.js',
            '../../node_modules/owl.carousel/dist/owl.carousel.min.js',
            '../../node_modules/jquery-sticky/jquery.sticky.js',
            '../../dist/js/theme.js'
        ])
        .pipe(concat('theme.bundle.js'))
        .pipe(gulp.dest(paths.js.dist))
        .pipe(concat('theme.bundle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.js.dist))
}

function image() {
    return gulp.src(paths.img.src)
        .pipe(imagemin({
            mozjpeg: ['-quality', 90]
        }))
        .pipe(gulp.dest(paths.img.dist))
}

function json() {
    return gulp.src(paths.json.src)
        .pipe(merge({ fileName: 'theme.json' }))
        .pipe(gulp.dest(paths.json.dist))
}

function html() {
    return gulp.src(paths.html.src)
        .pipe(twig({
            base: '../../src/twig/views',
            data: JSON.parse(fs.readFileSync('../../src/twig/json/dist/theme.json'))
        }))
        .pipe(prettify({
            unformatted: ['span', 'i'],
            extra_liners: ' ',
            max_preserve_newlines: 0
        }))
        .pipe(changed(paths.html.dist, {
            extension: '.html'
        }))
        .pipe(gulp.dest(paths.html.dist))
}

function html_all() {
    return gulp.src(paths.html.src)
        .pipe(twig({
            base: '../../src/twig/views',
            data: JSON.parse(fs.readFileSync('../../src/twig/json/dist/theme.json'))
        }))
        .pipe(prettify({
            unformatted: ['span', 'i'],
            extra_liners: ' ',
            max_preserve_newlines: 0
        }))
        .pipe(gulp.dest(paths.html.dist))
}

function svg() {
    return gulp.src(paths.svg.src)
        .pipe(iconfontcss({
            fontName: config.font.name,
            path: '../../src/fonts/icons.sass',
            targetPath: '../scss/_icons.scss',
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
        .pipe(gulp.dest('../../src/fonts'))
}

function svg_copy() {
    return gulp.src(['../../src/fonts/*', '!../../src/fonts/icons.sass' ]).pipe(gulp.dest(paths.svg.dist))
}

function host() {
    return browserSync.init({
        files : [
            '../../docs/css',
            '../../docs/*.html',
            '../../docs/js/*.js',
            paths.css.dist,
            paths.js.dist,
            paths.img.dist,
            paths.html.dist + '/*.html'
        ],
        notify: false,
        server: {
            baseDir: config.localhost.webroot,
            routes: {
                "/": "../../dist"
            }
        },
        startPath: '/docs'
    })
}

function bootstrap()        { return gulp.src('./node_modules/bootstrap/dist/**/*').pipe(gulp.dest('../../dist/plugins/bootstrap')) }
function jquery()           { return gulp.src('./node_modules/jquery/dist/**/*').pipe(gulp.dest('../../dist/plugins/jquery')) }
function popper()           { return gulp.src('./node_modules/popper.js/dist/umd/**/*').pipe(gulp.dest('../../dist/plugins/popper')) }
function fontawesome()      { return gulp.src(['node_modules/@fortawesome/fontawesome-free/*', 'node_modules/@fortawesome/fontawesome-free/*/*', '!node_modules/@fortawesome/fontawesome-free/svgs', '!node_modules/@fortawesome/fontawesome-free/svgs/*', '!node_modules/@fortawesome/fontawesome-free/sprites', '!node_modules/@fortawesome/fontawesome-free/sprites/*', '!node_modules/@fortawesome/fontawesome-free/less', '!node_modules/@fortawesome/fontawesome-free/less/*']).pipe(gulp.dest('../../dist/plugins/fontawesome')) }
function ckeditor()         { return gulp.src('./node_modules/@ckeditor/ckeditor5-build-classic/build/**/*').pipe(gulp.dest('../../dist/plugins/ckeditor')) }
function easypiechart()     { return gulp.src('./node_modules/easy-pie-chart/dist/**/*').pipe(gulp.dest('../../dist/plugins/easypiechart')) }
function bootstrap_select() { return gulp.src('./node_modules/bootstrap-select/dist/**/*').pipe(gulp.dest('../../dist/plugins/bootstrap-select')) }
function flatpickr()        { return gulp.src('./node_modules/flatpickr/dist/**/*').pipe(gulp.dest('../../dist/plugins/flatpickr')) }
function sticky()           { return gulp.src('./node_modules/jquery-sticky/**/*').pipe(gulp.dest('../../dist/plugins/jquery-sticky')) }
function ytplayer()         { return gulp.src('./node_modules/jquery.mb.ytplayer/dist/**/*').pipe(gulp.dest('../../dist/plugins/jquery-mb-ytplayer')) }

const build = {
    dev:         gulp.parallel(watch, host),
    css:         scss,
    image:       image,
    js:          gulp.series(babel, minify, script, lint),
    html: {
        all:     gulp.series(json, html_all),
        single:  html
    },
    icon:        gulp.series(svg, svg_copy),
    plugins:     gulp.series(bootstrap, jquery, popper, fontawesome, ckeditor, easypiechart, bootstrap_select, flatpickr, sticky, ytplayer)
}

function docs_json() {
    return gulp.src(['../../src/twig/json/src/**/*.json', '../../src/docs/json/src/**/*.json'])
        .pipe(merge({ fileName: 'docs.json' }))
        .pipe(gulp.dest('../../src/docs/json/dist'))
}

function docs_scss() {
    return gulp.src('../../src/docs/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(postcss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('../../docs/css'))
}

function docs_html() {
    return gulp.src('../../src/docs/twig/*.twig')
        .pipe(twig({
            base: '../../src/docs/twig/views',
            data: JSON.parse(fs.readFileSync('../../src/docs/json/dist/docs.json'))
        }))
        .pipe(prettify({
            unformatted: ['span', 'i'],
            extra_liners: ' ',
            max_preserve_newlines: 0
        }))
        .pipe(changed('../../docs', {
            extension: '.html'
        }))
        .pipe(gulp.dest('../../docs'))
}

function docs_html_all() {
    return gulp.src('../../src/docs/twig/*.twig')
        .pipe(twig({
            base: '../../src/docs/twig/views',
            data: JSON.parse(fs.readFileSync('../../src/docs/json/dist/docs.json'))
        }))
        .pipe(prettify({
            unformatted: ['span', 'i'],
            extra_liners: ' ',
            max_preserve_newlines: 0
        }))
        .pipe(gulp.dest('../../docs'))
}

function docs_lint() {
    return gulp.src(['../../src/docs/js/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
}

function docs_babel() {
    return rollup('../../src/docs/rollup.docs.js')
        .pipe(source('docs.js'))
        .pipe(gulp.dest('../../docs/js'))
}

function docs_script() {
    return gulp.src('../../docs/js/docs.js')
        .pipe(concat('docs.min.js'))
        .pipe(uglify({ output: { comments: true } }))
        .pipe(gulp.dest('../../docs/js'))
}

const docs = {
    css:         docs_scss,
    js:          gulp.series(docs_babel, docs_script, docs_lint),
    html: {
        all:     gulp.series(docs_json, docs_html_all),
        single:  docs_html
    }
}

function watch() {
    gulp.watch(paths.html.src, build.html.single)
    gulp.watch(paths.html.views, build.html.all)
    gulp.watch(paths.json.src, build.html.all)
    gulp.watch(paths.css.src, build.css)
    gulp.watch(paths.js.src, build.js)
    gulp.watch(paths.img.src, build.image)
    gulp.watch(paths.svg.src, build.icon)
    gulp.watch('../../src/docs/json/src/**/*.json',  docs.html.all)
    gulp.watch('../../src/docs/js/**/*.js', docs.js)
    gulp.watch('../../src/docs/twig/*.twig', docs.html.single)
    gulp.watch('../../src/docs/twig/views/*.twig', docs.html.all)
    gulp.watch('../../src/docs/scss/**/*.scss', docs.css)
}

gulp.task('icon', build.icon)
gulp.task('html', build.html.single)
gulp.task('html:all', build.html.all)
gulp.task('css', build.css)
gulp.task('js', build.js)
gulp.task('image', build.image)
gulp.task('plugins', build.plugins)
gulp.task('default', build.dev)

gulp.task('docs:css', docs.css)
gulp.task('docs:html', docs.html.single)
gulp.task('docs:html:all', docs.html.all)
gulp.task('docs:js', docs.js)
