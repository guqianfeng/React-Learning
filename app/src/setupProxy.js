const proxy = require("http-proxy-middleware")

module.exports = function(app){
    app.use("/miaov", proxy({
        "target": "https://data.miaov.com/",
        "secure": true, 
        "changeOrigin": true,
        "pathRewrite": {
            "^/miaov": ""
        },
        "cookieDomainRewrite": "https://data.miaov.com/" 
    }))
}