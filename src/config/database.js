const mongoose = require('mongoose')

  const MONGODB_URI = process.env.MONGODB_URI

const connectDB = () => {
    mongoose
    .connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); // Exit the application if the connection fails
    });
}

module.exports = connectDB