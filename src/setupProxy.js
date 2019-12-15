const proxy = require('http-proxy-middleware');

const proxyMiddleware = proxy({
  target: process.env.REACT_APP_API_URL,
  changeOrigin: true,
});

module.exports = function(app) {
  app.use('/api', proxyMiddleware);
};
