'use strict';

var gulp = require('gulp'),
	watch = require('gulp-watch'),
	rigger = require('gulp-rigger'),
	rimraf = require('rimraf'),
	browserSync = require("browser-sync"),
	reload = browserSync.reload;

var path = {
	build: {
		html: 	'./',
		css: 	'./css',
		img: 	'./img',		
	},
	src: {
		html: 	'src/*.html',
		css: 	'src/css/*.css',
		img: 	'src/img/**/*.*',
	}, 
	watch: {
		html: 'src/**/*.html',
		style: 'src/css/*.css',
		img: 'src/img/**/*.*'
	},
	clean: './'
};

var config = {
	server: {
		baseDir: "./"
	},
	tunnel: true,
	host: 'localhost',
	port: 3000,
	logPrefix: "Frontend_Dev"
};


gulp.task('html:build', function(){
	gulp.src(path.src.html)
		.pipe(rigger())
		.pipe(gulp.dest(path.build.html))
		.pipe(reload({stream: true}));
});

gulp.task('style:build', function(){
	gulp.src(path.src.css)
		.pipe(gulp.dest(path.build.css))
    	.pipe(reload({stream: true}));
});

gulp.task('img:build', function(){
	gulp.src(path.src.img)
		.pipe(gulp.dest(path.build.img))
    	.pipe(reload({stream: true}));
});


gulp.task('build', [
    'html:build',   
    'style:build',
    'img:build'
]);

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('img:build');
    });
});


gulp.task('webserver', function () {
    browserSync(config);
});


gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('default', ['build', 'webserver', 'watch']);