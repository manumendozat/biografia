var gulp = require('gulp');
var servidor = require('browser-sync');
var minifycss = require('gulp-minify-css');
var reload = servidor.reload;

gulp.task('servidor',['css'], function(){
	servidor({
		server:{
			baseDir: "./"
		}	
	});
	gulp.watch('css/*.css', ['css']).on('change', reload);
	gulp.watch('./*.html').on('change', reload);
	})

gulp.task('css', function(){
	gulp.src("css/*.css")
	.pipe(minifycss({keepBreak:true}))
	.pipe(gulp.dest('mini-css'))
})