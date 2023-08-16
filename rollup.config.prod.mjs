import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
	input: 'src/js/main.js',
	output: [
		{
			file: 'dist/bundle.js',
			format: 'iife',
			name: 'version',
			plugins: [terser()]
		}
	],
	plugins: [
		nodeResolve(),
		commonjs(),
    copy({
      targets: [
        { src: 'src/index.html', dest: 'dist' },
      ]
    })
  ]
};
