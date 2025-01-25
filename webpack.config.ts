import webpack from 'webpack';
import buildWebpack from './config/build/buildWebpack';
import path from 'path';
import { BuildMode, BuildPaths } from './config/build/types/types';

interface EnvVariables {
  mode: BuildMode,
  port: number
}

export default (env: EnvVariables) => {
  const buildPaths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build')
  }

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths: buildPaths,
  });
  return config;
};