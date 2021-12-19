const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    mode: "production",
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: process.env.PORT || 9800,
        host: "0.0.0.0",
        webSocketServer: false,
    },
}
