const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sample data
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'User Service', port: 4001 });
});

// Get all users
app.get('/', (req, res) => {
  res.json({
    success: true,
    data: users,
    count: users.length
  });
});

app.listen(4001, () => {
  console.log('User service running on port 4001');
  console.log('Available endpoints:');
  console.log('- GET / - Get all users');
});
