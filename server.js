const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { connectDB } = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Server is running'
  });
});

app.use('/api/v1', require('./routes'));

app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found'
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; 