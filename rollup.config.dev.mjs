import copy from 'rollup-plugin-copy';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
	input: 'src/js/main.js',
	output: [
		{
			file: '.dev/bundle.js',
			format: 'cjs'
		},
	],
	plugins: [
		nodeResolve(),
		commonjs(),
		serve('.dev'),
		livereload(),
    copy({
      targets: [
        { src: 'src/index.html', dest: '.dev' },
      ]
    })
  ]
};
