var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var rename  = require('gulp-rename');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// gulp.task('sass', function() {
//     //gulp.src('app/scss/*.scss')
//     gulp.src('app/scss/main.scss')
//         .pipe(plumber())
//         .pipe(sass())
//         .pipe(autoprefixer({
//             cascade: false
//         }))
//         .pipe(rename('main.css'))
//         .pipe(minify())
//         .pipe(gulp.dest('assets/css'))
//         .pipe(reload({stream: true}));
// });

// gulp.task('javascript', function() {
//     gulp.src('app/js/*.js')
//         .pipe(plumber())
//         .pipe(concat('all.js'))
//         .pipe(gulp.dest('assets/js'))
//         .pipe(reload({stream: true}));
// });



gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './151017/'
        } 
    });
    // gulp.watch('app/scss/*.scss', ['sass', reload]);
    // gulp.watch('app/js/*.js', ['javascript', reload]);
    gulp.watch('**/*.js').on('change', reload);
    gulp.watch('**/*.css').on('change', reload);
    gulp.watch('**/*.html').on('change', reload);
});

gulp.task('default', ['serve']);