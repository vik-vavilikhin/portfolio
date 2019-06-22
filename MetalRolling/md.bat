rem Структура папок БЭМ с сайта: https://webmikorn.ru/articles/opyit-sborki-proekta-gulp/
rem bower i jquery normalize.css bootstrap font-awesome bourbon

mkdir app
cd app
	mkdir assets
		cd assets
		mkdir css
			rem common.min.css
			rem common.css
			rem vendor.min.css
		mkdir fonts
		mkdir images
		mkdir js
			rem common.min.js
			rem common.js
			rem vendor.min.js
		cd ../
	mkdir blocks
		cd blocks
		mkdir block-1
			rem block-1.js
			rem block-1.scss
		mkdir block-2
			rem block-1.js
			rem block-1.scss
		mkdir block-3
			rem block-1.js
			rem block-1.scss
		cd ../
	mkdir materials
	mkdir pug
		cd pug
		mkdir blocks
			rem footer.pug
			rem head.pug
			rem header.pug
			rem sidebar.pug
		mkdir layouts
			rem default.pug
		mkdir pages
			rem 404.pug
			rem about.pug
			rem contacts.pug
			rem index.pug
			rem services.pug
		cd ../
	mkdir config
		cd config
			cd.> fonts.scss
			cd.> main.scss
			cd.> media.scss
			cd.> reset.scss
		cd ../
	mkdir vendor
	rem 	cd vendor
	rem 	mkdir bootstrap
	rem 	mkdir font-awesome
	rem 	mkdir jquery
	rem 	mkdir normalize.css
	rem cd ../
	rem 404.html
	rem about.html
	rem contacts.html
	rem index.html
	rem services.html
cd ../
mkdir dist
	cd dist
	mkdir assets
		cd assets
		mkdir css
			rem common.min.css
			rem vendor.min.css
		mkdir fonts
		mkdir images
		mkdir js
			rem common.min.js
			rem vendor.min.js
cd ../../
mkdir maket

rem .bowerrc
cd.> .bowerrc
	echo {"directory": "app/vendor"}>.bowerrc

rem .gitignore
cd.> .gitignore
	echo node_modules>.gitignore
	echo build>>.gitignore

rem gulpfile.js
rem package.json
	rem 404.html
	rem about.html
	rem contacts.html
	rem index.html
	rem services.html
rem node_module

rem bower init

rem npm i