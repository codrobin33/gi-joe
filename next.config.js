console.log('test', process.env.NODE_ENV)

var exports = {};
if (process.env.NODE_ENV != 'development') {
    exports = {
        assetPrefix: 'gi-joe/',
    }
}

module.exports = exports;