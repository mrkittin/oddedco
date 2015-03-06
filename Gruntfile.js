module.exports = function(grunt) {
    grunt.initConfig({
        jshint : {
            all: [ 'src/js/**/*.js']
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
            }
        },

        copy : {
            main : {
                expand : true,
                cwd : 'src/',
                src : [ '**/*.js', '**/*.html'],
                dest : 'target/'
            },
            images : {
                expand : true,
                cwd : 'src/img',
                src : [ '**/*.*'],
                dest : 'target/img'
            },
            server : {
                expand : true,
                cwd : 'server/',
                src : [ '**/*.*s'],
                dest : 'target/'
            },
            jquery : {
                expand : true,
                cwd : 'node_modules/jquery/dist',
                src : [ 'jquery.js'],
                dest : 'target/js/lib'
            },
            bootstrap : {
                expand : true,
                cwd : 'node_modules/bootstrap/dist/js',
                src : [ 'bootstrap.js'],
                dest : 'target/js/lib'
            },
            dot : {
                expand : true,
                cwd : 'node_modules/dot',
                src : [ 'dot.js'],
                dest : 'target/js/lib'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', [ 'watch']);
    grunt.registerTask('init', [ 'less', 'copy']);

};
