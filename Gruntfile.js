module.exports = function(grunt) {
    
      // Project configuration.
      grunt.initConfig({
          webdriver: {
              test: {
                  options: {
                      configFile: "wdio.conf.js", // wdio config file 
                      keepAlive: false, // If false, the grunt process stops when the test fails. 
                      noColor: false, // If true, protractor will not use colors in its output. 
                      args: {
                        params: {
                            testEnv: 'test'
                        },
                        verbose:false
                      }
                  }
              }, 
          },
      }),
    
      // Load the plugin that provides the "runner" task.
      grunt.loadNpmTasks('grunt-webdriver');
      
    
      // Default task(s).
      grunt.registerTask('default', ['runner']);
    
    };