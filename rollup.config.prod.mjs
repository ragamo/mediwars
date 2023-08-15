import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';

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
    copy({
      targets: [
        { src: 'src/index.html', dest: 'dist' },
      ]
    })
  ]
};
