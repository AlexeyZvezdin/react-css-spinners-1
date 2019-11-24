import babel from 'rollup-plugin-babel';
// Я так понял чтобы использовать нод модули внутри роллап конфига
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm'
    },
    {
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      },
      name: 'ReactCssSpiners',
      file: 'dist/bundle.umd.js',
      format: 'umd'
    }
  ],
  external: ['react'],
  plugins: [
    //   resolve dependencies
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
