module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
            server: {
                options: {
                    port: 3000,
                    base: ['app']
                }
            }
        },
    sass: {
      dist: {
        files: {
          'app/base.css': 'lib/base.scss'
        }
      }
    },
    browserify: {
      dist: {
        files: {
          'app/index.js': ['lib/index.js']
        }
      },
      test: {
        src: ['test/**/*.spec.js'],
        dest: 'test/specs.js',
        options: {
          browserifyOptions: {
            debug: true
          }
        }
      }
    },
    copy: {
      markup: {
        src: 'lib/index.html',
        dest: 'app/index.html'
      },
      data: {
        cwd: 'lib',
        src: 'data/**/*',
        dest: 'app',
        expand: true
      }
    },
    clean: {
      all: ['app']
    },
    watch: {
      markup: {
        files: ['lib/**/*.html'],
        tasks: ['copy']
      },
      styles: {
        files: 'lib/**/*.scss',
        tasks: ['sass']
      },
      scripts: {
        files: ['lib/**/*.js'],
        tasks: ['browserify:dist']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('w', ['build', 'connect', 'watch']);

  grunt.registerTask('build', ['clean', 'copy', 'sass', 'browserify']);
  grunt.registerTask('default', ['build']);

};
