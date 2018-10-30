var postcss = require('postcss');
module.exports = postcss.plugin('postcssTest', function (opts) {
    opts = opts || {};
    console.log(opts)
    // 传入配置相关的代码
    return function (root, result) {
        // 转化CSS 的功能代码
        console.log(root)
    };
});