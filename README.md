# TouchPoint.io Apps

## Getting started
To prepare everything for building or developing you need to install **Node JS** (http://nodejs.org/). After installation run ```npm install``` in root directory to install all necessary tools.

The is build using **Grunt JS** (http://gruntjs.com) as build automation system. The next paragraphs will show how to use it.

### Develop app
Use ```grunt``` to start development mode. Grunt will watch files and as they changed it will trigger a rebuild of neccessary files. It will build the app if source files are modified or start tests if test files are modified.

Resulting files can be found at ```/www```

Grunt also accepts arguments. Usage: ```grunt -arg=value```. Possible settings are
  - ```target```, ```app```, ```a```: e.g. ```pos``` or ```prep``` (default: ```pos```)
  - ```port```, ```p```: e.g. ```8080```, default: ```80```
  - ```domain```: e.g. ```br5.tp-devel.com```, default: ```br1.tp-devel.com```

### Test app
Tests are written with Jasmine (http://jasmine.io). Test source files can be found at */src/test*, built tests at */test*.

Run ```grunt test``` to do a single test run.


### Build app
Building the app will not just put all files to */www* and also minify CSS and JS files.

Run ```grunt dist -app=prep``` will build prep station app.
Run ```grunt dist -app=pos -domain=br5.tp-devel.com``` will build POS app with server domain set to br5.tp-devel.com.