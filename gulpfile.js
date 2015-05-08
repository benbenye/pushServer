var gulp = require('gulp');
var copy = require('gulp-copy');
var usemin = require('gulp-usemin');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var rev = require('gulp-rev');
 
var paths = {
  scripts: ['public/javascripts/**/*.js', '!client/external/**/*.js'],
  images: 'public/images/**/*',
  css: 'public/stylesheets/*.css',
  less:['public/stylesheets/**/*.less']
};
 
// Not all tasks need to use streams 
// A gulpfile is just another node program and you can use all packages available on npm 
gulp.task('clean', function(cb) {
  del(['build/css','build/js','build/images'], function(){console.log('122');});
});

gulp.task('cleancss', function(cb){
  del(['build/stylesheets'], cb);
});

gulp.task('cleanjs', function(cb){
  del(['build/javascripts'], cb);
});

gulp.task('cleanimages', function(cb){
  del(['build/images'], cb);
});

gulp.task('copyBuildHtml', function(cb){
  return gulp.src('build/html/**/*.html')
    .pipe(gulp.dest('temp/'));
})
 
gulp.task('uglifyScripts', ['cleanjs'], function() {
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
gulp.task('imagemin', ['cleanimages'], function() {
  return gulp.src(paths.images)
    // Pass in options to the task 
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('build/images'));
});

gulp.task('minifyCss', ['cleancss'], function() {
  return gulp.src(paths.css)
    .pipe(minifyCss({keepBreaks:false}))
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest('build/stylesheets'));
});

gulp.task('usemin', function(){
  return gulp.src('build/**/*.html')
    .pipe(usemin({
      css: [minifyCss(), 'concat',rev()],
      js: [uglify(), rev()]
    }))
    // .pipe(rev())
    .pipe(gulp.dest('build/'));
})

gulp.task('less2css', function(){
  return gulp.src(paths.less)
    .pipe(less())
    .pipe(minifyCss({keepBreaks:true}))
    .pipe(rev())
    .pipe(gulp.dest('build/stylesheets'));
});
 
// Rerun the task when a file changes 
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
});
 
// The default task (called when you run `gulp` from cli) 
gulp.task('default', ['uglifyScripts', 'imagemin', 'minifyCss', 'usemin']);