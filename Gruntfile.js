module.exports = function (grunt) {

	// load grunt modules
	require('load-grunt-tasks')(grunt);

	// set grunt settings
	var port = grunt.option('port') || grunt.option('p') || 9090;


	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Web Server
		connect: {
			server: {
				options: {
					port: port,
					base: ''
				}
			}
		},

		// do something on file change
		watch: {
			// common options
			options: {
				livereload: (port === 80 ? true : 1337),
				spawn: false
			},

			// restart grunt on Gruntfile change
			gruntfile: {
				files: 'Gruntfile.js',
				tasks: ['logSettings', 'jshint', 'build-dev'],
				reload: true,
				livereload: false
			},
			// restart grunt on Gruntfile change
			karmafile: {
				files: 'karma.conf.js',
				tasks: ['logSettings', 'test'],
				livereload: false
			},
			// Re-build react js
			react: {
				files: ['src/**/*.js', 'src/**/*.jsx', 
						'node_modules/react-component-carousel/build/Carousel.js'],
				tasks: ['logSettings', 'jshint', 'browserify:react']
			},
			// livereload on html change
			html: {
				files: 'src/*.html',
				tasks: ['logSettings', 'copy:html']
			},
			libs: {
				files: ['src/lib/**/*.js'],
				tasks: ['logSettings', 'copy:libs']
			},
			// compile sass on change
			sass: {
				files: 'src/sass/**/*.scss',
				tasks: ['logSettings', 'clean:wwwcss', 'compass:dev']
			},
			test: {
				files: ['src/test/**/*.js', 'src/test/**/*.jsx'],
				tasks: ['logSettings', 'test'],
				livereload: false
			},
			fonts: {
				files: 'src/font/**',
				tasks: ['logSettings', 'copy:fonts']
			}
		},

		// clean directories for re-compiling
		clean: {
			test: 'test/*',
			www: 'www/*',
			wwwcss: ['www/css/*.css', 'www/css/*.css.map'],
		},

		copy: {
			// copy html files to www directory
			html: {
				expand: true,
				cwd: 'src/',
				src: '*.html',
				dest: 'www/',
				filter: 'isFile'
			},
			libs: {
				expand: true,
				cwd: 'src/lib/',
				src: ['**/*'],
				dest: 'www/lib/'
			},
			fonts: {
				expand: true,
				cwd: 'src/font/',
				src: ['*'],
				dest: 'www/font/',
				filter: 'isFile'
			},
			images: {
				expand: true,
				cwd: 'src/images/',
				src: ['*'],
				dest: 'www/images/',
				filter: 'isFile'
			}
		},

		// concatenate all files into one after react compilation
		browserify: {
			options: {
				transform: ['reactify']
			},
			// compile react js
			react: {
				src: ['src/index.jsx'],
				dest: 'www/js/app.built.js'
			},
			// compile test files
			test: {
				src: ['src/test/**/*.jsx', 'src/test/**/*.js'],
				dest: 'test/test.built.js'
			}
		},

		// compile sass
		compass: {
			options: {
				sassDir: 'src/sass/',
				cssDir: 'www/css',
				imagesDir: 'www/images'
			},
			dev: {
				options: {
					sourcemap: true
				}
			},
			dist: {
				options: {
					outputStyle: 'compressed'
				}
			}
		},

		// compresses given js files (best for distribution)
		uglify: {
			options: {
				compress: {
					drop_console: true
				}
			},
			wwwjs: {
				files: [{
					expand: true,
					cwd: 'www/js',
					src: '**/*.js',
					dest: 'www/js'
				}]
			},
			wwwlib: {
				files: [{
					expand: true,
					cwd: 'www/lib',
					src: '**/*.js',
					dest: 'www/lib'
				}]
			}
		},

		// checking JS files for correct code (even JSX)
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				eqnull: true,
				browser: true
			},
			all: ['Gruntfile.js', 'src/**/*.js', 'src/**/*.jsx']
		},

		// testing environment
		karma: {
			options: {
				configFile: 'karma.conf.js'
			},
			defaultBrowser: {},
			defaultBrowser_keepalive: {
				singleRun: false
			}
		}
	});

	// Show current settings
	grunt.registerTask('logSettings', 'Echos settings to console', function () {
		grunt.log.subhead('Settings:');
		grunt.log.writeln('-----------------------');
		grunt.log.writeln('Server port: ' + port);
		grunt.log.writeln('-----------------------');
	});

	// registering build tasks
	grunt.registerTask('build-dev', ['clean:www', 'compass:dev', 'browserify:react', 'copy']);
	grunt.registerTask('build-dist', ['clean:www', 'compass:dist', 'browserify:react', 'copy', 'uglify']);
	grunt.registerTask('build-test', ['clean:test', 'jshint', 'browserify:test']);

	// registering test task (Use test-debug to debug tests)
	grunt.registerTask('test', ['logSettings', 'build-test', 'karma:defaultBrowser']);
	grunt.registerTask('test-debug', ['logSettings', 'build-test', 'karma:defaultBrowser_keepalive']);

	// the default tasks
	grunt.registerTask('default', ['logSettings', 'build-dev', 'connect', 'watch']);
};