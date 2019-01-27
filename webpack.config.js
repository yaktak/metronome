const path = require('path');

// vue-loader@15から必要
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          },
        ],
      },
      {
        test: /\.ts$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.[vue|ts|js]$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use:[{
          loader: 'eslint-loader',
          options: {
            cache: true,
          },
        }],
      },
      {
        test: /\.pug$/,
        use: [{
          loader: 'pug-plain-loader'
        }],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'vue-style-loader', },
          { loader: 'postcss-loader', },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.css'],
    alias: {
      // vue-template-compiler に読ませてコンパイルするために必要
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'docs'),
    open: true,
  },
}
