module.exports = {
    // 基本路径
    publicPath: "./",
    
    // 输出文件目录
    outputDir: 'build',
    // eslint-loader 是否在保存的时候检查
    configureWebpack : {
        performance: {
            hints:'warning',
            //入口起点的最大体积 整数类型（以字节为单位）
            maxEntrypointSize: 50000000,
            //生成文件的最大体积 整数类型（以字节为单位 300k）
            maxAssetSize: 30000000,
            //只给出 js 文件的性能提示
            assetFilter: function(assetFilename) {
                return assetFilename.endsWith('.js');
            }
        }
    }
}

