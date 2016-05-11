var gulp = require('gulp');
var hint = require('gulp-jshint');
var concat= require('gulp-concat');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');

//create the tasks

gulp.task('Js-hint',function(){
    gulp.src(['app/app.js','app/*/*.js',])
        .pipe(hint())
        .pipe(hint.reporter('default'));
});

gulp.task('concatFiles',function(){
     gulp.src(['app/register/*.js',
         'app/login/*.js',
         'app/vehicles/*.js',
         'app/home/*.js',
         'app/common/*.js',
         'app/common/*/*.js',
                  'app/app.js'])
       .pipe(concat('build.js'))
       .pipe(uglify())
       .pipe(gulp.dest("./build/scripts/"));
    
});

gulp.task('web-server',function(){
   connect.server({
      port:8900
   }) 
});

gulp.task('default',['web-server','concatFiles'],function(){});