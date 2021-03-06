REM Структура папок БЭМ с сайта: https://webmikorn.ru/articles/opyit-sborki-proekta-gulp/
REM
REM 1. Сформировать структуру папкок проекта
REM $ start md.bat
REM
REM 2. апустить установку пакетов и зависимостей Gulp
REM $ npm i
REM
REM 3. Произвести нинциализацию пакета Bower
REM bower init
REM
REM 4. Произвести установку внешних библиотек дополнений при необходимости
REM bower i jquery normalize.css bootstrap font-awesome bourbon

mkdir app
cd app
	mkdir assets
		cd assets
			mkdir css
				REM common.min.css
				REM common.css
				REM vendor.min.css
			mkdir fonts
			mkdir images
				cd images
					mkdir icon
				cd ../
			mkdir js
				REM common.min.js
				REM common.js
				REM vendor.min.js
		cd ../
	mkdir main
		cd main
			mkdir head
				REM head.pug
				REM head.scss
				REM head.js
			mkdir header
				REM header.pug
				REM header.scss
				REM header.js
			mkdir footer
				REM footer.pug
				REM footer.scss
				REM footer.js
		cd ../
	mkdir bricks
		cd bricks
			mkdir logo
				REM logo.pug
				REM logo.scss
				REM logo.js
			mkdir search
				REM search.pug
				REM search.scss
				REM search.js
		cd ../
	mkdir pages
		REM 404.pug
		REM about.pug
		REM contacts.pug
		REM index.pug
		REM services.pug
	mkdir config
		cd config
			REM Создать пустые файлы стилей
			cd.> fonts.scss
			cd.> main.scss
			cd.> media.scss
			cd.> reset.scss
		cd ../
	mkdir vendor
		REM bootstrap
		REM font-awesome
		REM jquery
		REM normalize.css
	REM 404.html
	REM about.html
	REM contacts.html
	REM index.html
	REM services.html
cd ../

mkdir dist
	cd dist
	mkdir assets
		cd assets
		mkdir css
			REM common.min.css
			REM vendor.min.css
		mkdir fonts
		mkdir images
		mkdir js
			REM common.min.js
			REM vendor.min.js
cd ../../
mkdir maket

REM Установить для дополнений Bower папку ".app/vendor" по умолчанию
cd.> .bowerrc
	echo {"directory": "app/vendor"}> .bowerrc

REM Внести список исключений для Git
cd.> .gitignore
	echo node_modules/> .gitignore
	echo maket/>> .gitignore
	echo app/vendor/>> .gitignore
	echo package-lock.json>> .gitignore
	echo bower.json>> .gitignore
