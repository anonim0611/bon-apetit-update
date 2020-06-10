const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|jpg|gif)$/i,
                use: [
                    {
                        loader: "file-loader?name=src/images/bgs.jpg"
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'dist/index.html'),
            template: path.resolve(__dirname, 'src/index.html')
        })
    ]
};
