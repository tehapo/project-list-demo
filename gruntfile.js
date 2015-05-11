module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            dist: {
                src: 'database.js',
                dest: 'database.min.js'
            }
        },
        sass: {
            dist: {
                src: 'project-list.scss',
                dest: 'project-list.css',
                options: {
                    style: 'compressed'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['uglify', 'sass']);
};
