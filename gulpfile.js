var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
// var rename = require('gulp-rename');
// var nunjucksRender = require('gulp-nunjucks-render');
var open = require('gulp-open');
var refresh = require('gulp-refresh');
var jsonServer = require("gulp-json-srv");
var wait = require('gulp-wait')

var server = jsonServer.create();
var bases = {
    app: 'app/',
    dist: 'dist/'
};
var paths = {
    scripts: ['scripts/main.js', '!scripts/app.js', '!scripts/libs/**/*.js'],
    libs: ['scripts/libs/jquery/dist/jquery.js'],
    styles: ['styles/app.scss'],
    html: ['index.html'],
    images: ['images/**/*.png']
};

// GULP JSON SERVER
gulp.task("db", function() {
    return gulp.src("app/data/db.json")
        .pipe(server.pipe());
});


// GULP CONNECT
gulp.task('connect', function() {
    connect.server({
        root: ['app'],
        livereload: true,
        port: 9000,
        open: {
            browser: 'chrome' // if not working OS X browser: 'Google Chrome'
        }
    });
});

// LIVE RELOAD
gulp.task('reload', function() {
    gulp.src('./app/*.html')
        .pipe(refresh());
});



// GULP OPEN
gulp.task('open', function() {
    var options = {
        uri: 'http://localhost:9000',
        app: 'chrome',

    };
    gulp.src('app/index.html')
        .pipe(open(options));
});

// TEMPLATING
// gulp.task('nunjucks', function() {
//     return gulp.src(['app/pages/*.nunjucks','app/pages/directives/*.nunjucks'])
//         .pipe(nunjucksRender({
//             path: ['app/pages/','app/pages/directives/', 'app/partials/', 'app/templates/', 'app/partials/*.nunjucks'] // String or Array
//         }))
//         .pipe(gulp.dest('app'))
//         .pipe(refresh());
// });


/*DEVELOPMENT*/
// Process scripts and concatenate them into one output file
gulp.task('dev_scripts', function() {
    gulp.src(paths.scripts, { cwd: bases.app })
        // .pipe(concat('app.js'))
        // .pipe(gulp.dest(bases.app + 'scripts/'))
        // .pipe(refresh());
});



//Converting sass file to css
gulp.task('dev_sass', function() {
    gulp.src(paths.styles, { cwd: bases.app })
        .pipe(wait(500))
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(bases.app + 'styles/'))
        // .pipe(refresh());
});



// Imagemin images and ouput them in dist
// gulp.task('dev_imagemin', function() {
//     gulp.src(paths.images, { cwd: bases.app })
//         .pipe(imagemin())
//         .pipe(gulp.dest(bases.app + 'images/'))
//         .pipe(refresh());
// });



/*PRODUCTION*/
// Delete the dist directory
gulp.task('clean', function() {
    return gulp.src(bases.dist)
        .pipe(clean());
});



// Imagemin images and ouput them in dist
gulp.task('imagemin', ['clean'], function() {
    gulp.src(paths.images, { cwd: bases.app })
        .pipe(imagemin())
        .pipe(gulp.dest(bases.dist + 'images/'));
});

// Copy all other files to dist directly
gulp.task('copy', ['clean'], function() {
    // Copy html
    gulp.src(paths.html, { cwd: bases.app })
        .pipe(gulp.dest(bases.dist));

    // Copy styles
    gulp.src('styles/app.css', { cwd: bases.app })
        .pipe(cleanCSS())
        .pipe(gulp.dest(bases.dist + 'styles'));

    // Copy script and minify
    // Process scripts and concatenate them into one output file
    gulp.src('scripts/app.js', { cwd: bases.app })
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest(bases.dist + 'scripts/'));

    // Copy lib scripts, maintaining the original directory structure
    gulp.src(paths.libs, { cwd: 'app/**' })
        .pipe(gulp.dest(bases.dist));
});
//watching for CHANGES
gulp.task('watch', function() {
    gulp.watch(['app/**/*.scss'], ['dev_sass']);
    // gulp.watch(['app/**/*.nunjucks'], ['nunjucks']);
    // gulp.watch(['app/scripts/*.js','app/scripts/**/*.js'], ['dev_scripts']);
    gulp.watch(["app/data/data.json"], ["db"]);
    gulp.watch(['app/scripts/*.js', 'app/scripts/**/*.js'], ['dev_scripts']);
    gulp.watch(['app/*.html']);
    refresh.listen();
});


// Running developmen task
// gulp.task('default', ['connect', 'dev_scripts', 'dev_imagemin', 'dev_sass', 'nunjucks', 'open', 'watch']);
gulp.task('default', ['db', 'connect', 'dev_scripts', 'dev_sass', 'open', 'watch']);


// Creating 'dist' folder
// gulp.task('dist', ['clean', 'imagemin', 'copy']);
