module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Karma profiles.
    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      autoWatch: {
        autoWatch: true,
        singleRun: false
      },
      singleRun: {
        autoWatch: false,
        singleRun: true
      }
    }
  });
};