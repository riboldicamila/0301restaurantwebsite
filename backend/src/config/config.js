module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'yourSecretKey',
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost/restaurant', 
  };
  