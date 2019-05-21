var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// Save a reference to the `reload` method

// Watch scss AND html files, doing different things with each.
gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            // baseDir: ['template','static']
            baseDir: ['./template','./']
        }
    });

    gulp.watch(['./template/*.*','./static/styles/*.css','./static/scripts/*.js']).on("change", reload);
});
