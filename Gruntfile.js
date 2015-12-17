module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        concat: {
            dist: {
                src: [
                    // Entry point of the app
                    'build/bundle.js',
                ],
                dest: 'build/bundle.js'
            }
        },

        browserify: {
            client: {
                src: [ './src/main.js' ],
                dest: './build/bundle.js',
                options: {
                  transform: ['reactify']
                }
            }

        },

        jshint:{
            options: {
                globalstrict: true,
                  globals: {
                    angular: true,
                    window: true,
                    io: true
                  },
                },
            all:[ 'src/main.js' ]
        },

        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: './src/stylesheets/sass',
                    src: ['./*.scss'],
                    dest: './build/css',
                    ext: '.css'
                }]
            }
        },

        watch: {
            files: [ 'src/**/*.js', 'src/stylesheets/sass/*.scss', 'src/stylesheets/sass/**/*.scss' ],
            tasks: [ /* 'jshint', */ 'sass', 'browserify' ]
        },
    });

    grunt.registerTask( 'default', [ 'watch' ] );
};