
module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    connect: {
      examples: {
        options: {
          keepalive: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('serve', ['connect']);
};
