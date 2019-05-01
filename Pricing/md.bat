chcp 1251
goto start
_____________________________________________________________________________
1. ������������ ��������� ������ �������
   $ start md.bat

2. �������� ��������� ������� � ������������ Gulp
   $ npm i

3. ���������� ��������� Bower
   $ npm i -g bower

4. ���������� ������������� ������ Bower
   $ bower init

5. ��� �������������!!! ���������� ��������� ������� ��������� ����������
   $ bower i jquery normalize.css bootstrap font-awesome bourbon
_____________________________________________________________________________

========================= �������� ��������� ������ =========================
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

:: ���������� ��� ���������� Bower ����� ".app/vendor" �� ���������
cd.> .bowerrc
	echo {"directory": "app/vendor"}> .bowerrc

:: ������ ������ ���������� ��� Git
cd.> .gitignore
	echo node_modules/> .gitignore
	echo maket/>> .gitignore
	echo app/vendor/>> .gitignore

REM echo off
cls
echo ____________________________________________________________________
echo ��� ���������������� ������������ WinRAR, ������������� �� ���������
echo.
echo ����� ������������ � ������ ����������, �������, 7z.
echo ��� ����� ���������� ���������������� ������ � ����� ����� md.bat
echo � �������� 7z, � ������ � WinRAR ���������������
echo ____________________________________________________________________
echo ��� ������ ���������� ������� � �����������.
echo ��� ����� ������ ���� ��� ��������
echo ____________________________________________________________________
echo.
echo.
REM pause
set /P FileName="��� �����: "
@cd /d "%~dp0"
@SetLocal EnableExtensions EnableDelayedExpansion

::<�������>
:: x     -  ������� ����� � ������� ������

:: <�����>
:: inul  -  �� ���������� ������� ���������
:: r     -  �������� � ��������� �����������
:: y     -  ������������� ����� '��' �� ��� �������
echo.
"C:\Program Files\WinRAR\rar.exe" x %cd%\%FileName% %cd% -r -y -inul

:: ����� ������������ 7z.exe
:: "C:\Program Files\7-Zip\7z.exe" x %cd%\%"FileName"% -o%cd%\"" -r -y
::echo ��� �������� ���������. ����� ���������� � ����������. �����!

echo ���������� ������ ���������.

::echo.
::npm i -g bower
::PAUSE
::echo �������� �������� Bower ����������
::echo.

::bower init
::echo �������� �������� Bower ���������������
::echo.

::bower i jquery normalize.css bemto
::echo � ����� ./app/vendor ����������� ��������� �������:
::echo 1. jquery
::echo 2. normalize.css
::echo 3. bemto
::echo.

echo ��� �������� ���������. ����� ���������� � ����������. �����!