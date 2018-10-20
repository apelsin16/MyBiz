var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('less', function() {
    return gulp.src('style/style.less')
    .pipe(less())
    .pipe(gulp.dest('style/'))
});

gulp.task('watch', function() {
    gulp.watch('style/**/*.less', ['less']);
});