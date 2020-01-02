const gulp = require('gulp');
const hb = require('gulp-hb');
const rename = require('gulp-rename');
const { watch } = require('gulp');

function basic() {
    return gulp
        .src('./src/*.hbs')
        .pipe(hb()
            .partials('./src/partials/*.hbs')
        )
        .pipe(rename({ extname: '.html' }))
        .pipe(gulp.dest('./dist'));
}

const hbsWatch = './src/*.hbs'
 
gulp.task('default', basic);

watch(hbsWatch, basic);