const gulp = require("gulp"); //
const sass = require("gulp-sass"); //转.scss文件为.css
const connect = require("gulp-connect"); //搭建本地服务
const concat = require("gulp-concat"); //合并
const uglify = require("gulp-uglify"); //压缩
const rename = require("gulp-rename"); //重命名
const cleanCss = require("gulp-clean-css"); //压缩css
const imagemin = require("gulp-imagemin"); //压缩图片
const babel = require("gulp-babel"); //将高版本ES转为ES5

//拷贝首页
gulp.task("indexHtml", done => {
    gulp.src("index.html").pipe(gulp.dest("dist")).pipe(connect.reload());
    done();
});

//拷贝其余html
gulp.task("otherHtml", done => {
    gulp.src("html/*.html").pipe(gulp.dest("dist/html"))
        .pipe(connect.reload());
    done();
});

//拷贝压缩js
gulp.task("rename", done => {
    gulp.src(["js/register.js", "js/login.js", "js/jquery1.11.js"])
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
        .pipe(concat("main.js"))
        .pipe(gulp.dest("dist/js"));
    done();
});

//拷贝压缩css
gulp.task("css", done => {
    gulp.src("css/*.css").pipe(sass())
        .pipe(cleanCss())
        .pipe(gulp.dest("dist/css"))
    done();
});

//拷贝图片
gulp.task("copyImg", done => {
    gulp.src("img/**").pipe(imagemin()).pipe(gulp.dest("dist/img"));
    done();
})

//build
gulp.task("build", gulp.parallel("indexHtml", "otherHtml", "css", "rename", "copyImg"));

//监听
gulp.task("watch", done => {
    gulp.watch("index.html", gulp.series("indexHtml"));
    gulp.watch("html/*.html", gulp.series("otherHtml"));
    gulp.watch("js/*.js", gulp.series("rename"));
    gulp.watch("css/*.css", gulp.series("css"));
    done();
});

//搭建服务器
gulp.task("server", done => {
    connect.server({
        root: "dist",
        livereload: true,
    })
    done();
});

//创建默认任务
gulp.task("default", gulp.series("build", "server", "watch"));