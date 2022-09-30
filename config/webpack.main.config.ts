import webpack from "webpack"
import { getPath } from "./utils"

const config: webpack.Configuration = {
  target: "electron-main",
  entry: getPath("./src/main/index.ts"),
  output: {
    path: getPath("./entrance"),
    filename: "index.js"
  },
  resolve: {
    alias: {
      resources: getPath("./resources")
    },
    extensions: [".ts", ".js"]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [new webpack.ProgressPlugin()]
}

export default config
