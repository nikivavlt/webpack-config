import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from './types/types';

export default function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port ?? 3000,
    open: true, 
    historyApiFallback: true,
  }
}