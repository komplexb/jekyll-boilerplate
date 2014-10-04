module.exports = function(grunt) {

  grunt.initConfig({
    'gh-pages': {
      options: {
        base: '_site'
      },
      src: ['**']
    },
    cssmin: {
	  minify: {
	    expand: true,
	    cwd: '_site/assets/css/',
	    src: ['*.css', '!*.min.css'],
	    dest: '_site/assets/css/',
	  }
	}
  });

  grunt.loadNpmTasks('grunt-git');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('deploy', ['cssmin','gh-pages']);
  grunt.registerTask('default', ['gh-pages']);

};
