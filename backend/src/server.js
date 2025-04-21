const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth.routes');
const menuRoutes = require('./routes/menu.routes');
const reservationRoutes = require('./routes/reservation.routes');
const orderRoutes = require('./routes/order.routes');

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(express.json()); // To parse JSON requests

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/orders', orderRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
