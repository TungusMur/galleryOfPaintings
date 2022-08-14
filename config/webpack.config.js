const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const isDev = process.env.NODE_ENV === "development";

const styleLoader = (loaders) => {
  const loader = [
    isDev
      ? "style-loader"
      : {
          loader: MiniCssExtractPlugin.loader,
          options: {
            emit: true,
          },
        },
    "css-loader",
  ];

  if (loaders) {
    loader.push(...loaders);
  }

  return loader;
};

const babelLoader = (preset) => {
  const loader = {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"],
    },
  };

  if (preset) {
    loader.options.presets.push(...preset);
  }

  return loader;
};

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };

  if (!isDev) {
    config.minimize = true;
    config.minimizer = [new CssMinimizerPlugin(), new TerserPlugin()];
  }

  return config;
};

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", path.resolve(__dirname, "../src") + "/index.jsx"],
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    publicPath: "/",
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "../src") + "/index.html",
      filename: "index.html",
      minify: {
        collapseWhitespace: !isDev,
      },
    }),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, "../src/assets/img/favicon.ico"),
    //       to: path.resolve(__dirname, "../dist"),
    //     },
    //   ],
    // }),
    new Dotenv({ path: path.resolve(__dirname, "../.env") }),
  ],
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx"],
    alias: {
      "@shared": path.resolve(__dirname, "../src/shared"),
      "@src": path.resolve(__dirname, "../src"),
      "@store": path.resolve(__dirname, "../src/store"),
      "@styles": path.resolve(__dirname, "../src/styles"),
      "@helpers": path.resolve(__dirname, "../src/helpers"),
      "@assets": path.resolve(__dirname, "../src/assets"),
    },
  },
  optimization: optimization(),
  devServer: {
    port: 3300,
    historyApiFallback: true,
    hot: isDev,
  },
  devtool: isDev ? "inline-source-map" : "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: styleLoader(),
      },
      {
        test: /\.s[ac]ss$/,
        use: styleLoader(["sass-loader"]),
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: babelLoader(),
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: babelLoader(["@babel/preset-react"]),
      },
    ],
  },
};
