const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sample data
let orders = [
  {
    id: 1,
    userId: 1,
    productId: 1,
    quantity: 2,
    total: 1999.98,
    status: 'pending',
    createdAt: new Date().toISOString()
  }
];

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'Order Service', port: 4003 });
});

// Get all orders
app.get('/', (req, res) => {
  res.json({
    success: true,
    data: orders,
    count: orders.length
  });
});

app.listen(4003, () => {
  console.log('Order service is running on port 4003');
  console.log('Available endpoints:');
  console.log('- GET / - Get all orders');
});
