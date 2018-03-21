'use strict';

var gulp = require('gulp'),
	watch = require('gulp-watch'),
	rigger = require('gulp-rigger'),
	rimraf = require('rimraf'),
	browserSync = require("browser-sync"),
	reload = browserSync.reload;

var path = {
	build: {
		html: 	'build/',
		css: 	'build/css',
		img: 	'build/img',		
	},
	src: {
		html: 	'src/*.html',
		css: 	'src/css/*.css',
		img: 	'src/img/*.*',		

	}, 
	watch: {
		html: 'src/**/*.html',
		style: 'src/*.css',
		img: 'src/img/**/*.*'
	},
	clean: './build/'
};

var config = {
	server: {
		baseDir: "./build/"
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

gulp.task('css:build', function(){
	gulp.src(path.src.css)
		.pipe(gulp.dest(path.build.css))
    	.pipe(reload({stream: true}));
});

gulp.task('img:build', function(){
	gulp.src(path.src.img)
		.pipe(gulp.dest(path.build.img))
    	.pipe(reload({stream: true}));
});