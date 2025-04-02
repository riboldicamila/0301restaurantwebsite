module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'yourSecretKey', // Make sure to put this in your .env
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost/restaurant', // MongoDB URI
  };
  