const gulp = require("gulp"); //gulp
const sass = require("gulp-sass"); //转.scss文件为.css
const connect = require("gulp-connect"); //搭建本地服务
const concat = require("gulp-concat"); //合并
const uglify = require("gulp-uglify"); //压缩
const rename = require("gulp-rename"); //重命名
const cleanCss = require("gulp-clean-css"); //压缩css
const imagemin = require("gulp-imagemin"); //压缩图片
const babel = require("gulp-babel"); //将高版本ES转为ES5
const sourcemaps = require("gulp-sourcemaps"); //获取css文件在控制台的行数

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
    gulp.src("js/*.js")
        .pipe(connect.reload())
        // .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
        .pipe(concat("main.js"))
        .pipe(gulp.dest("dist/js"));
    done();
});

//拷贝压缩css
gulp.task("css", done => {
    gulp.src("css/**").pipe(sass())
        .pipe(cleanCss())
        .pipe(gulp.dest("dist/css"))
    done();
});

//转scss为css
gulp.task("sass", done => {
    gulp.src("sass/*.scss")
        .pipe(sourcemaps.init()) //启用sourcemaps功能
        .pipe(sass({ //将scss转为css
            outputStyle: "compressed", //全压缩css
        }))
        .pipe(sourcemaps.write()) //生成记录css控制台位置信息的sourcemaps文件
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());
    done();
});

//拷贝图片
gulp.task("copyImg", done => {
    gulp.src("img/**").pipe(imagemin()).pipe(gulp.dest("dist/img"));
    done();
});

//拷贝font字体
gulp.task("copyFont", done => {
    gulp.src("font/**").pipe(uglify()).pipe(gulp.dest("dist/font"));
    done();
});

//build 执行以上所有task任务
gulp.task("build", gulp.parallel("indexHtml", "otherHtml", "css", "rename", "sass", "copyImg", "copyFont"));

//监听
gulp.task("watch", done => {
    gulp.watch("index.html", gulp.series("indexHtml"));
    gulp.watch("html/*.html", gulp.series("otherHtml"));
    gulp.watch("js/*.js", gulp.series("rename"));
    gulp.watch("css/*.css", gulp.series("css"));
    gulp.watch("sass/*.scss", gulp.series("sass"));
    gulp.watch("img/**", gulp.series("copyImg"));
    gulp.watch("font/**", gulp.series("copyFont"));
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