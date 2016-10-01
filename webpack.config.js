module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: __dirname,
        filename: "./assets/javascript/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
