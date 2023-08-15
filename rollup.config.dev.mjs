import copy from 'rollup-plugin-copy';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
	input: 'src/js/main.js',
	output: [
		{
			file: '.dev/bundle.js',
			format: 'cjs'
		},
	],
	plugins: [
		serve('.dev'),
		livereload(),
    copy({
      targets: [
        { src: 'src/index.html', dest: '.dev' },
      ]
    })
  ]
};
