module.exports = {
  entry: './index.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: [
          // {
          //   loader: 'ts-loader'
          // },
          {
            loader: 'webpack-modular-typescript-import',
            options: {
							/*
								moduleName: 'antd',
								components: 'lib',
								style: 'css',
								camel2Dash: true,
							*/
              style: false
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}
