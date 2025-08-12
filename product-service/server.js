const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sample data
let products = [
  { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
  { id: 2, name: 'Smartphone', price: 599.99, category: 'Electronics' }
];

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'Product Service', port: 4002 });
});

// Get all products
app.get('/', (req, res) => {
  res.json({
    success: true,
    data: products,
    count: products.length
  });
});

app.listen(4002, () => {
  console.log('Product service running on port 4002');
  console.log('Available endpoints:');
  console.log('- GET / - Get all products');
});
