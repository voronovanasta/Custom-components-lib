import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import "webpack-dev-server";

type Mode = "development" | "production";
interface EnvVariables {
  mode: Mode;
}

export default (env: EnvVariables) => {
  const isDev = env.mode === "development";
  const config: webpack.Configuration = {
    mode: env.mode ?? "development",
    entry: path.resolve(__dirname, "src", "index.ts"),
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      library: "custom-components-lib",
      libraryTarget: "umd",
      umdNamedDefine: true,
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "index.html"),
        favicon: path.resolve(__dirname, "public", "favicon.ico"),
      }),
      new MiniCssExtractPlugin(),
    ],
    devtool: isDev ? "inline-source-map" : "nosources-source-map",
    devServer: isDev
      ? {
          open: true,
          port: 3000,
        }
      : undefined,
  };
  return config;
};
