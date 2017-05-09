// homework

let gulp = require('gulp'); 
// let sass = require('gulp-sass'); 
let browser = require('gulp-browser'); 

let OUTPUT_DIRECTORY = 'public'; 

// html, css and js tasks 

gulp.task('default', ['html', 'js']); 

gulp.task('html', function () { 
    return gulp.src('shop.html')
        .pipe(gulp.dest(OUTPUT_DIRECTORY)); 
}); 

// gulp.task('css', function () {
//     return gulp.src('scss/style.scss')
//         .pipe(sass())
//         .pipe(gulp.dest(OUTPUT_DIRECTORY)); 
// }); 

gulp.task('js', function () {
    return gulp.src('js/app2.js')
    .pipe(browser.browserify())
    .pipe(gulp.dest(OUTPUT_DIRECTORY)); 
});

gulp.task('watch', ['html', 'js'], function () {
    gulp.watch('shop.html', ['html']);
    // gulp.watch('scss/*.scss', ['css']); 
    gulp.watch('js/*.js', ['js']);  
});