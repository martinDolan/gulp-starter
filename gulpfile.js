
//Required
var gulp = require ('gulp'),
	uglify = require ('gulp-uglify');
	// compass = require ('gulp-compass');
	rename = require('gulp-rename');
	sass = require('gulp-sass');


//Scripts Task
gulp.task('scripts', function(){
	gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));

});

//Compass / Sass Tasks
gulp.task('styles', function() {
    gulp.src('./app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css/'));
});

//Watch Tasks
gulp.task('watch', function(){
	gulp.watch('app/js/**/*.js', ['scripts']);
	gulp.watch('app/sass/**/*.scss',['styles']);
});


//Default Task
gulp.task('default', ['styles', 'scripts', 'watch']);

