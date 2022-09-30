import webpack from "webpack"
import "webpack-dev-server"
import HtmlWebpackPlugin from "html-webpack-plugin"
import windowConfig from "./windowConfig"
import { getPath } from "./utils"

const config: webpack.Configuration = {
  entry: {
    ...windowConfig.reduce((res, config) => {
      res[config.name] = config.entry
      return res
    }, {})
  },
  output: {
    path: getPath("./windows")
  },
  resolve: {
    alias: {
      resources: getPath("./resources")
    },
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: "css-loader"
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    ...windowConfig.map(
      config =>
        new HtmlWebpackPlugin({
          filename: `${config.name}.html`,
          template: config.html,
          chunks: [config.name]
        })
    )
  ],
  devServer: {
    port: 3344,
    static: {
      directory: getPath("./resources"),
      publicPath: "/resources"
    },
    client: {
      progress: true,
      overlay: { errors: true, warnings: false }
    }
  }
}

export default config
