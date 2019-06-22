//========================= TASK (ЗАДАЧИ) =====================================
// gulp.task('mytask', function() {       // Создаем задачу
//  return gulp.src('source-filse')       // Объявляем ресурс для работы (с чем работаем)
//                                        // !          - исключить
//                                        // [...]        - массив
//                                        // .+(scss|sass)  - несколько расширений
//    .pipe(plugin())                     // Запускаем плагин для обработки ресурса
//    .pipe(gulp.dest('folder'))          // Выводим результат обработки в папку
// });
//=============================================================================
'use strict';

// Подключение плагинов через переменные:
var gulp         = require('gulp'),                  // Gulp
   autoprefixer  = require('gulp-autoprefixer'),     // Добавление вендорных префиксов
   concat        = require('gulp-concat'),           // Объединение файлов
   csso          = require('gulp-csso'),             // Минификация CSS-файлов
   del           = require('del'),                   // Удаление папок и файлов
   imagemin      = require('gulp-imagemin'),         // Оптимизация изображений
   plumber       = require('gulp-plumber'),          // Обработка ошибок
   pngquant      = require('imagemin-pngquant'),     // Оптимизация PNG-изображений
   pug           = require('gulp-pug'),              // Pug
   rename        = require('gulp-rename'),           // Переименование файлов
   sass          = require('gulp-sass'),             // Sass
   uglify        = require('gulp-uglify'),           // Минификация JS-файлов
   ttf2woff      = require('gulp-ttf2woff'),         // Преобразование шрифтов .ttf в woff
   ttf2woff2     = require('gulp-ttf2woff2');        // Преобразование шрифтов .ttf в woff2

// Задание путей к используемым файлам и папкам:
var paths = {
   dir: {
      app:  './app',
      dist: './dist'
   },
   //=============
   watch: {
      html: './app/pug/**/*.pug',
      css: [
            './app/blocks/**/*.scss',
            './app/config/**/*.scss'
         ],
      js:   './app/blocks/**/*.js'
   },
   //=============
   app: {
      html: {
         src: './app/pug/pages/*.pug',
         dest: './app'
      },

      common: {
         css: {// Файлы указываем по порядку подключения
            src: [
                  './app/config/reset.scss',
                  './app/config/fonts.scss',
                  './app/config/main.scss',
                  './app/blocks/**/*.scss',
                  './app/config/media.scss'
               ],
            dest: './app/assets/css'
         },

         js: {
            src: './app/blocks/**/*.js',
            dest: './app/assets/js'
         },
         
         fonts: {
            src: './app/assets/fonts/**/*.ttf',
            dest: './app/assets/fonts'
         }
      },

      vendor: {
         css: {// Файлы внешних библиотек
            src: [
                  '!./app/vendor/normalize.css/normalize.css',
                  '!./app/vendor/bootstrap/dist/css/bootstrap.min.css',
                  '!./app/vendor/font-awesome/web-fonts-with-css/css/fontawesome.min.css',
                  '!./app/vendor/font-awesome/web-fonts-with-css/css/fontawesome.min.css',
                  //^ Исключение из обработки ^
                  './app/vendor/fontello/css/fontello.css'
               ],
            dest: './app/assets/css'
         },

         js: {
            src: [
                  '!./app/vendor/bootstrap/dist/js/bootstrap.min.js',
                  //^ Исключение из обработки ^
                  './app/vendor/jquery/dist/jquery.min.js'
               ],
            dest: './app/assets/js'
         },

         fonts: {
            src: [
                  '!./app/vendor/font-awesome/fonts/*.*',
                  //^ Исключение из обработки ^
                  './app/vendor/fontello/font/**/*.*'
               ],
            dest: './app/assets/fonts/fontello'
         }
      }
   },
   //=============
   img: {
      src: './app/assets/images/**/*.*',
      dest: './dist/assets/images'
   },
   //=============
   dist: {
      html: {
         src: './app/*.html',
         dest: './dist'
      },

      css: {
         src: './app/assets/css/*.min.css',
         dest: './dist/assets/css'
      },

      js: {
         src: './app/assets/js/*.min.js',
         dest: './dist/assets/js'
      },

      fonts: {
         src: './app/assets/fonts/**/*.*',
         dest: './dist/assets/fonts'
      }
   }
}

// Подключение Browsersync:
var browserSync = require('browser-sync').create(),
   reload = browserSync.reload;

// Таск для работы Browsersync, автообновление браузера:
gulp.task('serve', function() {
   browserSync.init({
      server: './app',
      notify: false
   });
   gulp.watch(paths.watch.html, gulp.series('html'));
   gulp.watch(paths.watch.css, gulp.series('cssCommon'));
   gulp.watch(paths.watch.js, gulp.series('jsCommon'));
   gulp.watch('*.html').on('change', reload);
});

// Таск для работы Pug, преобразование Pug в HTML:
gulp.task('html', function () {
   return gulp.src(paths.app.html.src)
      .pipe(plumber())
      .pipe(pug({pretty: true}))
      .pipe(gulp.dest(paths.app.html.dest))
      .pipe(browserSync.stream());
});

// Таск для преобразования Sass-файлов в CSS:
gulp.task('cssCommon', function() {
   return gulp.src(paths.app.common.css.src)
      .pipe(plumber())
      .pipe(concat('common.scss'))
      .pipe(sass({outputStyle: 'expanded'}))
      .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
      .pipe(gulp.dest(paths.app.common.css.dest))
      .pipe(rename({suffix: '.min'}))
      .pipe(csso())
      .pipe(gulp.dest(paths.app.common.css.dest))
      .pipe(browserSync.stream());
});

// Таск для объединения и минификации пользовательских JS-файлов:
gulp.task('jsCommon', function() {
   return gulp.src(paths.app.common.js.src)
      .pipe(plumber())
      .pipe(concat('common.js'))
      .pipe(gulp.dest(paths.app.common.js.dest))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
      .pipe(gulp.dest(paths.app.common.js.dest))
      .pipe(browserSync.stream());
});

// Таск для объединения и минификации CSS-файлов внешних библиотек:
gulp.task('cssVendor', function () {
   return gulp.src(paths.app.vendor.css.src)
      .pipe(concat('vendor.min.css'))
      .pipe(csso())
      .pipe(gulp.dest(paths.app.vendor.css.dest));
});

// Таск для объединения и минификации JS-файлов внешних библиотек:
gulp.task('jsVendor', function () {
   return gulp.src(paths.app.vendor.js.src)
      .pipe(concat('vendor.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(paths.app.vendor.js.dest));
});

// Таск для объединения папок fonts внешних библиотек:
gulp.task('fontsVendor', function () {
   return gulp.src(paths.app.vendor.fonts.src)
      .pipe(gulp.dest(paths.app.vendor.fonts.dest));
});

// Таск для предварительной очистки (удаления) production-папки:
gulp.task('clean', function() {
   return del(paths.dir.dist);
});

// Таск для обработки изображений:
gulp.task('img', function() {
   return gulp.src(paths.img.src)
      .pipe(imagemin({use: [pngquant()]}))
      .pipe(gulp.dest(paths.img.dest));
});

// Таск для преобразования шрифтов *.ttf в шрифты *.woff:
gulp.task('fontsWoff', function () {
   return gulp.src(paths.app.common.fonts.src)
      .pipe(ttf2woff())   // преобразование .ttf => woff
      .pipe(gulp.dest(paths.app.common.fonts.dest));
});

// Таск для преобразования шрифтов *.ttf в шрифты *.woff2:
gulp.task('fontsWoff2', function () {
   return gulp.src(paths.app.common.fonts.src)
      .pipe(ttf2woff2())  // преобразование .ttf => woff2
      .pipe(gulp.dest(paths.app.common.fonts.dest));
});

// Таск для формирования production-папки:
gulp.task('dist', function () {
   var htmlDist = gulp.src(paths.dist.html.src)    
      .pipe(gulp.dest(paths.dist.html.dest));      // Перенос HTML
   var cssDist = gulp.src(paths.dist.css.src)      
      .pipe(gulp.dest(paths.dist.css.dest));       // Перенос CSS
   var jsDist = gulp.src(paths.dist.js.src)        
      .pipe(gulp.dest(paths.dist.js.dest));        // Перенос JS
   var fontsDist = gulp.src(paths.dist.fonts.src)  
      .pipe(gulp.dest(paths.dist.fonts.dest));     //Перенос шрифтов

   return htmlDist, cssDist, jsDist, fontsDist;
});

// Таск для преобразования шрифтов
gulp.task('fonts', gulp.series('fontsWoff', 'fontsWoff2'));

// Таск для сборки:
// gulp.task('build', gulp.parallel('html', 'cssCommon', 'jsCommon', 'cssVendor', 'jsVendor', 'fontsVendor'));
gulp.task('build', gulp.parallel('html', 'cssCommon', 'jsCommon'));

// Таск для разработки:
gulp.task('default', gulp.series('build', 'serve'));

// Таск для production:
gulp.task('public', gulp.series('clean', 'img', 'fonts', 'dist'));