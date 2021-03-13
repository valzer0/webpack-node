import path from 'path' 
import webpack from 'webpack' 
import nodeExternals from 'webpack-node-externals' 


const config: webpack.Configuration = {
  entry: {
    main: path.resolve(__dirname, 'src/main')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `[name]-${process.env.NODE_ENV === 'production' ? 'min' : 'dev'}.js`
  },
  target: 'node',
  externals: [nodeExternals()],
  devtool: 'eval-source-map',
  node: {
    global: false,
    __dirname: false,
    __filename: false
  },
  mode: process.env.NODE_NEV === 'production' ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.ts/,
        exclude: /node_modules/,
        use: ['ts-loader']
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.ts','.js','.json']
  }
}

export default config