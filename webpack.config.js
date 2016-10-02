var path = require("path");

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.join(__dirname,'assets','javascript'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
              test: /\.jsx?$/,
              loader: 'babel',
              exclude: /node_modules/,
              query: {
                presets: ['react']
              }
            },
            {
              test: /\.node$/,
              loader: "node-loader"
            }
        ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
    devServer: {
      contentBase: './src',
    },
    devtool: 'source-map'
};
