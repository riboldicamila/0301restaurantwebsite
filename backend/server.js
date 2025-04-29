require('dotenv').config();
const cors = require('cors');
const express = require('express');
const connectDB = require('./src/config/db');
const authRoutes = require('./src/routes/auth.routes');
const menuRoutes = require('./src/routes/menu.routes');
const reservationRoutes = require('./src/routes/reservation.routes');
const orderRoutes = require('./src/routes/order.routes');

connectDB()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  console.log('Request Headers:', req.headers);
  next(); 
});

app.use('/api/auth', authRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/orders', orderRoutes);

app.use((err, req, res, next) => {
  console.error('Error occurred:', err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
