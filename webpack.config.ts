import path from "path";
import webpack from "webpack";
import "webpack-dev-server";

export default () => {
  const config: webpack.Configuration = {
    mode: "production",
    entry: path.resolve(__dirname, "src", "index.ts"),
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
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
    externals: {
      react: "React",
      "react-dom": "ReactDOM",
    },
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      library: "custom-components-lib",
      libraryTarget: "umd",
      umdNamedDefine: true,
      clean: true,
    },
  };
  return config;
};
