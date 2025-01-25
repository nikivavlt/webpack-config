import path from 'path';
import webpack, { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/types';

export default function buildPlugins(options: BuildOptions): Configuration['plugins'] {
  const isDev = options.mode === 'development';

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ template: options.paths.html }),
  ]

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin());
  } else {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }));
  }

  return plugins;
}