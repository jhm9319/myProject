const path = require('path');
module.exports = {
    entry: "./app/app.js",//入口文件
    output: {//出口文件
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    mode: "development",//"development" "production"
    watch: true,//自动更新
    module: {//模块
        rules: [//模块规则，配置loader，解析器等
            {
                test: /\.js$/,//以js结尾的文件
                include: [//包含文件的路径
                    path.resolve(__dirname, "app")
                ],
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                loader: "babel-loader"

            }
        ]
    }
}