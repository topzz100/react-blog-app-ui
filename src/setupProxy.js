const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://holar-blog-app.herokuapp.com',
      changeOrigin: true,
    })
  );
};