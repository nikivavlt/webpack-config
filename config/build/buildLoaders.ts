import { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/types';
import { buildBabelLoader } from './babel/buildBabelLoader';

export default function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';

  const imageLoader =       {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, "css-loader","sass-loader"],
  };

  const tsLoader = {
    exclude: /node_modules/,
    test: /\.tsx?$/,
    loader: 'ts-loader',
    options: {
      transpileOnly: true
    }
  }
  
  // const tsLoader = {
  //   exclude: /node_modules/,
  //   test: /\.tsx?$/, 
  //   use: [
  //     {
  //       loader: 'ts-loader',
  //       options: {
    //         transpileOnly: true
  //       }
  //     },
  //   ]
  // }
  const babelLoader = buildBabelLoader(options);

  return [imageLoader, scssLoader, babelLoader];
}