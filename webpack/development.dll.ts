import * as CleanWebpackPlugin from "clean-webpack-plugin";
import { join } from "path";
import { Configuration, DllPlugin } from "webpack";

const config = (dirPath: string): Configuration => {
  return {
    devtool: "inline-source-map",
    output: {
      devtoolModuleFilenameTemplate: "webpack:///[absolute-resource-path]",
      filename: "[name].js",
      library: "[name]",
      path: join(dirPath, "/dev"),
      publicPath: "/",
    },
    plugins: [
      new CleanWebpackPlugin([join(dirPath, "/dev")], {
        root: process.cwd(),
        verbose: true,
      }),
      new DllPlugin({
        name: "[name]",
        path: join(dirPath, "/dev/[name]-manifest.json"),
      }),
    ],
  };
};

export default config;