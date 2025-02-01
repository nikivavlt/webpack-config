import webpack, { Configuration, DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/types';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export default function buildPlugins(options: BuildOptions): Configuration['plugins'] {
  const isDev = options.mode === 'development';

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ template: options.paths.html }),
    new DefinePlugin({ WEBPACK_PLATFORM: JSON.stringify(options.platform) }),
  ]

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin());
    plugins.push(new ForkTsCheckerWebpackPlugin());
  } else {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }));
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
}