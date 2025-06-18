import path from 'path';
import webpack from 'webpack';

export default () => {
  const config: webpack.Configuration = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    module: {
      rules: [
        {
          test: /\.module\.s[ac]ss$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[local]--[hash:base64:5]',
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'custom-components-lib',
      libraryTarget: 'umd',
      umdNamedDefine: true,
      clean: true,
    },
  };
  return config;
};
