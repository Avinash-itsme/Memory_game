const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const cors =require('cors');
const morgan=require('morgan');

const app = express();

// Connect DB
connectDB();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Initialize middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/history', require('./routes/history'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '/client', 'build', 'index.html'))
  );
}

// Declare port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
