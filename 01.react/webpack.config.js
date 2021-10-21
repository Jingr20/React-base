const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist')
    },
    devServer:{
        port:3000,
        hot:true
    },
    module:{
        rules:[
            {
                test:/\.js|jsx$/i,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env','@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}