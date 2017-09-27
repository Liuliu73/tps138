var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compileSass',function(){
    // 查找sass文件
    // 匹配文件成功后，返回文档流
    // gulp.src(['./src/sass/*.scss','!./src/sass/var.scss'])
    gulp.src('./src/sass/*.scss')

        // 编译sass文件
        .pipe(sass({outputStyle:'compact'}).on('error', sass.logError))

        // 输出文件到硬盘
        .pipe(gulp.dest('./src/css/'));
});


// 监听sass文件修改
gulp.task('jtSass',function(){
    // 监听home.scss文件，如果有修改,则自动自动compileSass任务
    gulp.watch('./src/sass/common_style.scss',['compileSass']);
    gulp.watch('./src/sass/style.scss',['compileSass']);
});
