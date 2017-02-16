var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');



gulp.task('sass', function () {
    return gulp.src("fix.scss")
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'));
})
gulp.task('sass:watch', function () {
    gulp.watch('./*.scss', ['sass']);
});
gulp.task('css-dependencies',['sass'], function () {
    return gulp.src([
        "bower_components/font-awesome/css/font-awesome.min.css",
        "bower_components/pace/themes/white/pace-theme-flash.css",
        "bower_components/angular-material/angular-material.min.css",
        "dist/css/fix.css"
    ])
        .pipe(concat('libs.min.css'))
        .pipe(gulp.dest('dist/css'));
});


gulp.task('js-min', function () {
    return gulp.src([
        "app/services.js",
        "app/app.js"
    ])
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
gulp.task('js-dependencies', ['js-min'],function () {
    return gulp.src([
        "bower_components/jquery/dist/jquery.min.js",
        "bower_components/angular/angular.min.js",
        "bower_components/angular-animate/angular-animate.min.js",
        "bower_components/angular-aria/angular-aria.min.js",
        "bower_components/angular-messages/angular-messages.min.js",
        "bower_components/angular-route/angular-route.min.js",
        "bower_components/angular-resource/angular-resource.min.js",
        "bower_components/angular-material/angular-material.min.js",
        "bower_components/pace/pace.min.js",
        "dist/js/app.min.js"
    ])
        .pipe(concat('libs.min.js'))
        .pipe(gulp.dest('dist/js'));
});


gulp.task('default',['sass']);
