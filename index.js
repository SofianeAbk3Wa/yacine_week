import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routes from './routes/index.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const mongoDB = process.env.MONGO_DB

// Middleware
app.use(
    bodyParser.urlencoded({ extended: true }),
    express.urlencoded({ extended: true }),
    express.json()
);

// MongoDB connection
mongoose.connect(mongoDB)
    .then(() => console.log('MongoDB connected successfully!'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/', routes);

// Start server
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
