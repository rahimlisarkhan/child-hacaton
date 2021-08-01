const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const minify = require('gulp-csso');
const uglify = require('gulp-uglify');
// const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync');


let style = () => {
    return gulp.src('./sass/*.scss')
        .pipe(gulpSass())
        .pipe(minify())
        // .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./server/css/'));
}

let imgmin = () =>{
    return gulp.src('./img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./server/img/'))
}


let uglifyJS = () =>{
    return gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./server/js/'));
}


// let cleanCss = () => {
//     return gulp.src('./server/css/*.css')
      
//         .pipe(gulp.dest('./server/cleancss/'));
// }


let watchGulp = () => {
    browserSync.init({
        server: {
            baseDir: './',
            // index: "html/index.html"
        }
    })
    gulp.watch('./sass/*.scss', style);
    gulp.watch('./server/css/*.css').on('change',browserSync.reload);
    gulp.watch('./html/*.html').on('change',browserSync.reload);
    gulp.watch('./js/*.js', uglifyJS);
    gulp.watch('./img/*').on('change',browserSync.reload);
    gulp.watch('./img/*', imgmin);
    gulp.watch('./js/*.js').on('change',browserSync.reload);
    
}



// Comands
exports.build = gulp.series(style, uglifyJS,imgmin);
exports.live = watchGulp;
exports.default = gulp.parallel(watchGulp,uglifyJS,imgmin);


