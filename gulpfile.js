
//Required
var gulp = require ('gulp'),
	uglify = require ('gulp-uglify');
	compass = require ('gulp-compass');
	rename = require('gulp-rename');


//Scripts Task
gulp.task('scripts', function(){
	gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));

});

//Compass / Sass Tasks
gulp.task('compass', function(){
	gulp.src('app/scss/style.scss')
		.pipe(compass({
			config_file: 'config.rb',
			css: 'app/css',
			sass: 'app.scss'
		}))
		.pipe(gulp.dest('app/css'));
});

//Watch Tasks
gulp.task('watch', function(){
	gulp.watch('app/js/**/*.js', ['scripts']);
	gulp.watch('app/scss/**/*.scss', ['compass']);
});


//Default Task
gulp.task('default', ['scripts', 'watch', 'compass' ]);

