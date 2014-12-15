module.exports = function(grunt) {
	grunt.initConfig({
		sass: {                              // Task
			dist: {                            // Target
				options: {                       // Target options
					style: 'nested'
				},
				files: {                         // Dictionary of files
					'assets/css/style.css': 'assets/css/style.scss'      // 'destination': 'source'
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			css: {
				files: ['assets/css/*.scss'],
				tasks: ['sass']
			},
			sprite: {
				files: ['assets/img/sprites/*.png'],
				tasks: ['sprite']
			}
		},
		sprite:{
			all: {
				src: 'assets/img/sprites/*.png',
				destImg: 'assets/img/sprites/spritesheet.png',
				destCSS: 'assets/css/sprites.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-spritesmith');
}