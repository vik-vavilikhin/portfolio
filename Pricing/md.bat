chcp 1251
goto start
_____________________________________________________________________________
1. Сформировать структуру папкок проекта
   $ start md.bat

2. апустить установку пакетов и зависимостей Gulp
   $ npm i

3. Произвести установку Bower
   $ npm i -g bower

4. Произвести нинциализацию пакета Bower
   $ bower init

5. При неоюходимости!!! Произвести установку внешних библиотек дополнений
   $ bower i jquery normalize.css bootstrap font-awesome bourbon
_____________________________________________________________________________

========================= ФАЙЛОВАЯ СТРУКТУРА ПРЕКТА =========================
   \project
   |   +---\app
   |   |   +---\assets
   |   |   |   +---\css
   |   |   |   |   +---common.css
   |   |   |   |   +---common.min.css
   |   |   |   |   +---vendor.min.css
   |   |   |   |
   |   |   |   +---\fonts
   |   |   |   |   +---font.eot
   |   |   |   |   +---font.ttf
   |   |   |   |   +---font.woff
   |   |   |   |   +---font.woff2
   |   |   |   |   +---font.svg
   |   |   |   |
   |   |   |   +---\images
   |   |   |   |   +---img.jpg
   |   |   |   |   +---img.png
   |   |   |   |   |
   |   |   |   |   +---\icon
   |   |   |   |   |   +---icon.ico
   |   |   |   |   |   +---icon.png
   |   |   |   |
   |   |   |   +---\js
   |   |   |   |   +---common.js
   |   |   |   |   +---common.min.js
   |   |   |   |   +---vendor.min.js
   |   |   |   |
   |   |   |   +---index.html
   |   |   |   +---about.html
   |   |   |   +---contactc.html
   |   |   |   +---404.html
   |   |   |   +---services.html
   |   |   |
   |   |   +---\liability
   |   |   |   +---\blocks
   |   |   |   |   +---\logo
   |   |   |   |   |   +---logo.pug
   |   |   |   |   |   +---logo.scss
   |   |   |   |   |   +---logo.js
   |   |   |   |   |
   |   |   |   |   +---\navbar
   |   |   |   |   |   +---navbar.pug
   |   |   |   |   |   +---navbar.scss
   |   |   |   |   |   +---navbar.js
   |   |   |   |   |
   |   |   |   |   +---\social
   |   |   |   |   |   +---social.pug
   |   |   |   |   |   +---social.scss
   |   |   |   |   |   +---social.js
   |   |   |   |   |   +---\_active
   |   |   |   |   |   |   +---social_active.scss
   |   |   |   |   |
   |   |   |   |   +---\search
   |   |   |   |   |   +---search.pug
   |   |   |   |   |   +---search.scss
   |   |   |   |   |   +---search.js
   |   |   |   |   |   +---\__magnifier
   |   |   |   |   |   |   +---search__magnifier.pug
   |   |   |   |   |   |   +---search__magnifier.scss
   |   |   |   |   |   |   +---search__magnifier.js
   |   |   |   |   |
   |   |   |   |   +---\button
   |   |   |   |   |   +---button.pug
   |   |   |   |   |   +---button.scss
   |   |   |   |   |   +---button.js
   |   |   |   |
   |   |   |   +---\layout
   |   |   |   |   +---\body
   |   |   |   |   |   +---body.pug
   |   |   |   |   |
   |   |   |   |   +---\head
   |   |   |   |   |   +---header.pug
   |   |   |   |   |
   |   |   |   |   +---\debug-grid
   |   |   |   |   |   +---debug-grid.pug
   |   |   |   |   |
   |   |   |   |   +---\body-scripts
   |   |   |   |   |   +---body-scripts.pug
   |   |   |   |
   |   |   |   +---\pages
   |   |   |   |   +---404.pug
   |   |   |   |   +---index.pug
   |   |   |   |   +---about.pug
   |   |   |   |   +---contactc.pug
   |   |   |   |   +---services.pug
   |   |   |   |   +---template.pug
   |   |   |   |
   |   |   |   +---\config
   |   |   |   |   +---style.scss
   |   |   |   |   +---_angle.scss
   |   |   |   |   +---_font-face.scss
   |   |   |   |   +---_vars.scss
   |   |   |   |
   |   |   +---\vendor
   |   |   |   +---_smart-grid.scss
   |   |   |   +---smartgrid-options.js
   |
   |   +----\dist
   |   |   +---\css
   |   |   |   +---common.min.css
   |   |   |   +---vendor.min.css
   |   |   |
   |   |   +---\fonts
   |   |   |   +---font.eot
   |   |   |   +---font.ttf
   |   |   |   +---font.woff
   |   |   |   +---font.woff2
   |   |   |   +---font.svg
   |   |   |
   |   |   +---\images
   |   |   |   +---img.jpg
   |   |   |   +---img.png
   |   |   |   |
   |   |   |   +---\icon
   |   |   |   |   +---icon.ico
   |   |   |   |   +---icon.png
   |   |   |
   |   |   +---\js
   |   |   |   +---common.min.js
   |   |   |   +---vendor.min.js
_____________________________________________________________________________
:start
@echo off

mkdir app
cd app
   mkdir assets
      cd assets
         mkdir css
         mkdir fonts
         mkdir images
         mkdir js
      cd ../
   mkdir liability
      cd liability
         mkdir blocks
         mkdir config
         mkdir layout
         mkdir pages
      cd ../
      mkdir vendor
cd ../

mkdir dist
mkdir maket

:: Установить для дополнений Bower папку ".app/vendor" по умолчанию
cd.> .bowerrc
	echo {"directory": "app/vendor"}> .bowerrc

:: Внести список исключений для Git
cd.> .gitignore
	echo node_modules/> .gitignore
	echo maket/>> .gitignore
	echo app/vendor/>> .gitignore

REM echo off
cls
echo ____________________________________________________________________
echo Для разархивирования используется WinRAR, установленный по умолчанию
echo.
echo Можно использовать и другие архиваторы, паример, 7z.
echo Для этого необходимо раскоментировать строку в конце файла md.bat
echo с запуском 7z, а строку с WinRAR закоментировать
echo ____________________________________________________________________
echo Имя архива необходимо указать с расширением.
echo Имя файла должно быть без пробелов
echo ____________________________________________________________________
echo.
echo.
REM pause
set /P FileName="Имя файла: "
@cd /d "%~dp0"
@SetLocal EnableExtensions EnableDelayedExpansion

::<Команды>
:: x     -  Извлечь файлы с полными путями

:: <Ключи>
:: inul  -  Не показывать никаких сообщений
:: r     -  Включить в обработку подкаталоги
:: y     -  Подразумевать ответ 'Да' на все запросы
echo.
"C:\Program Files\WinRAR\rar.exe" x %cd%\%FileName% %cd% -r -y -inul

:: Можно использовать 7z.exe
:: "C:\Program Files\7-Zip\7z.exe" x %cd%\%"FileName"% -o%cd%\"" -r -y
::echo Все операции завершены. Можно приступить к творчеству. Удачи!

echo Распаковка архива закончена.

::echo.
::npm i -g bower
::PAUSE
::echo Пакетный менеджер Bower установлен
::echo.

::bower init
::echo Пакетный менеджер Bower инициализирован
::echo.

::bower i jquery normalize.css bemto
::echo В папку ./app/vendor произведена установка пакетов:
::echo 1. jquery
::echo 2. normalize.css
::echo 3. bemto
::echo.

echo Все операции завершены. Можно приступить к творчеству. Удачи!