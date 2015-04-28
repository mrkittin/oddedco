module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      all: ['src/js/**/*.js']
    },
    less: {
      dev: {
        files: [
          {
            expand: true,
            cwd: 'src/less',
            src: ['**/*.less', '!_*.less'],
            dest: 'target/css/',
            ext: '.css'
          }
        ]
      }
    },
    watch: {
      css: {
        files: ["src/less/**/*.less"],
        tasks: ['less:dev']
      },
      all: {
        files: ["src/js/**/*.js", "src/**/*.html"],
        tasks: ['copy:main']
      },
      server: {
        files: ["server/**/*.*"],
        tasks: ['copy:server']
      }
    },

    copy: {
      main: {
        expand: true,
        cwd: 'src/',
        src: ['**/*.js', '**/*.html'],
        dest: 'target/'
      },
      images: {
        expand: true,
        cwd: 'src/img',
        src: ['**/*.*'],
        dest: 'target/img'
      },
      fonts: {
        expand: true,
        cwd: 'src/fonts',
        src: ['**/*.*'],
        dest: 'target/css/fonts'
      },
      server: {
        expand: true,
        cwd: 'server/',
        src: ['**/*.js'],
        dest: 'target/'
      },
      jquery: {
        expand: true,
        cwd: 'node_modules/jquery/dist',
        src: ['jquery.js'],
        dest: 'target/js/lib'
      },
      bootstrap: {
        expand: true,
        cwd: 'node_modules/bootstrap/dist/js',
        src: ['bootstrap.js'],
        dest: 'target/js/lib'
      },
      dot: {
        expand: true,
        cwd: 'node_modules/dot',
        src: ['doT.js'],
        dest: 'target/js/lib'
      },
      angular: {
        expand: true,
        cwd: 'node_modules/angular',
        src: ['angular.js'],
        dest: 'target/js/lib'
      },
      angular_route: {
        expand: true,
        cwd: 'node_modules/angular-route',
        src: ['angular-route.js'],
        dest: 'target/js/lib'
      },
      angular_resource: {
        expand: true,
        cwd: 'node_modules/angular-resource',
        src: ['angular-resource.js'],
        dest: 'target/js/lib'
      },
      angular_carousel: {
        expand: true,
        cwd: 'node_modules/angular-carousel/dist/',
        src: ['angular-carousel.js'],
        dest: 'target/js/lib'
      },
      angular_touch: {
        expand: true,
        cwd: 'node_modules/angular-touch/',
        src: ['angular-touch.js'],
        dest: 'target/js/lib'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('init', ['less', 'copy']);

};
