var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
 
var paths = {
  scripts: ['public/javascripts/**/*.js', '!client/external/**/*.js'],
  images: 'public/images/**/*',
  less:['public/stylesheets/**/*.less']
};
 
// Not all tasks need to use streams 
// A gulpfile is just another node program and you can use all packages available on npm 
gulp.task('clean', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src` 
  del(['build'], cb);
});

gulp.task('cleancss', function(cb){
  del(['public/stylesheets'], cb);
});
 
gulp.task('scripts', ['clean'], function() {
  // Minify and copy all JavaScript (except vendor scripts) 
  // with sourcemaps all the way down 
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat('all.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'));
});
 
// Copy all static images 
gulp.task('images', ['clean'], function() {
  return gulp.src(paths.images)
    // Pass in options to the task 
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('build/images'));
});

gulp.task('less2css', function(){
  return gulp.src(paths.less)
    .pipe(less())
    .pipe(minifyCss({keepBreaks:true}))
    .pipe(gulp.dest('build/stylesheets'));
});
 
// Rerun the task when a file changes 
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
});
 
// The default task (called when you run `gulp` from cli) 
gulp.task('default', ['watch', 'scripts', 'images', 'less2css']);