import webpack from 'webpack';
import buildDevServer from './buildDevServer';
import buildLoaders from './buildLoaders';
import buildPlugins from './buildPlugins';
import buildResolvers from './buildResolvers';
import { BuildOptions } from './types/types';

export default function buildWebpack(options: BuildOptions): webpack.Configuration {
  const isDev = options.mode === 'development';

  return {
      mode: options.mode ?? 'development',
      entry: options.paths.entry,
      module: {
        rules: buildLoaders(options),
      },
      resolve: buildResolvers(options),
      output: {
        path: options.paths.output,
        filename: '[name].[contenthash].js',
        clean: true
      },
      plugins: buildPlugins(options),
      devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
      devServer: isDev ? buildDevServer(options) : undefined,
      performance: {
        maxAssetSize: 1000000,
        hints: false
      }
    };
}