module.exports = function(grunt) {

  require('jit-grunt')(grunt, {
    concat: 'grunt-contrib-concat',
    uglify: 'grunt-contrib-uglify',    
    imagemin: 'grunt-contrib-imagemin',
    sass: 'grunt-contrib-sass',
    watch: 'grunt-contrib-watch'
  });
  
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
       
    settings: { 
      root: 'httpdocs/_assets',
      src: 'src',
      cssPath: '<%= settings.root %>/css',
      sassPath: '<%= settings.src %>/scss',
      imagePath: '<%= settings.root %>/img',
      jsSrc: '<%= settings.src %>/js',
      jsApp: '<%= settings.jsSrc %>/app',
      jsModules: '<%= settings.jsSrc %>/modules',
      jsPlugins: '<%= settings.jsSrc %>/plugins',      
      jsDest: '<%= settings.root %>/js'     
    },
    
    concat: {   
      dist: {
        src: [
          '<%= settings.jsPlugins %>/*.js',
          '<%= settings.jsApp %>/*.js',
          '<%= settings.jsModules %>/*.js'
        ],
        dest: '<%= settings.jsDest %>/global.js',
      }
    },
    
    uglify: {
      build: {
        src: '<%= settings.jsDest %>/global.js',
        dest: '<%= settings.jsDest %>/global.min.js'
      }
    }, 
    
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: '<%= settings.imagePath %>/',
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= settings.imagePath %>/'
        }]
      }
    },           
          
    sass: {
      development: {
        options: {
          style: 'uncompressed'
        },
        files: {
          '<%= settings.cssPath %>/styles.css': '<%= settings.sassPath %>/styles.scss',
          '<%= settings.cssPath %>/styles-ie.css': '<%= settings.sassPath %>/styles-ie.scss'
        }
      },
      production: {
      	options: {
          style: 'compressed'
        },
        files: {
          '<%= settings.cssPath %>/styles.css': '<%= settings.sassPath %>/styles.scss',
          '<%= settings.cssPath %>/styles-ie.css': '<%= settings.sassPath %>/styles-ie.scss'
        }
      }
    },

    watch: {
    	scripts: {
        	files: ['<%= settings.jsPlugins %>/*.js', '<%= settings.jsApp %>/*.js', '<%= settings.jsModules %>/*.js'],
        	tasks: ['concat'],
        	options: {
        		spawn: false,
        	}
      	},  
      	sass: {
        	files: ['<%= settings.sassPath %>/**/*.scss'],
        	tasks: ['sass:production']
      	},
		livereload: {
			options: {
				livereload: true
			},
			files: ['*.html', '*.php', '<%= settings.jsDest %>/*.js', '<%= settings.cssPath %>/styles.css'],
		}           
    }

  });
  

  // Register tasks...

  grunt.registerTask('dev', [ // Development
    'concat',
    'sass:development'
  ]);
  
  grunt.registerTask('prod', [ // Production
    'concat',
    'uglify',
    'sass:production',
    'imagemin'
  ]);
  
  grunt.registerTask('default', [ // Watch
    'watch'
  ]);

};