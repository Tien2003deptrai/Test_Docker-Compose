const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const morgan = require('morgan');

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Proxy middleware configuration
const userServiceProxy = createProxyMiddleware({
  target: 'http://user-service:4001',
  changeOrigin: true,
  pathRewrite: {
    '^/api/v1/users': '/'
  }
});

const productServiceProxy = createProxyMiddleware({
  target: 'http://product-service:4002',
  changeOrigin: true,
  pathRewrite: {
    '^/api/v1/products': '/products'
  }
});

const orderServiceProxy = createProxyMiddleware({
  target: 'http://order-service:4003',
  changeOrigin: true,
  pathRewrite: {
    '^/api/v1/orders': '/orders'
  }
});

// Routes
app.use('/api/v1/users', userServiceProxy);
app.use('/api/v1/products', productServiceProxy);
app.use('/api/v1/orders', orderServiceProxy);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'API Gateway is running' });
});

app.listen(4000, () => {
  console.log('API Gateway is running on http://localhost:4000');
  console.log('Available routes:');
  console.log('- /api/v1/users');
  console.log('- /api/v1/products');
  console.log('- /api/v1/orders');
});
