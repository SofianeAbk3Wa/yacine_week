import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import routes from './routes/index.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const mongoDB = process.env.MONGO_URI

// Middleware
app.use(
    express.urlencoded({ extended: true }),
    express.json()
);

// MongoDB connection
mongoose.connect(mongoDB)
    .then(() =>   console.log('Connexion à MongoDB réussie !'))
    .catch(err => console.error('Erreur de connexion à MongoDB:', err));

// Routes
app.use('/', routes);

// Start server
app.listen(port, () => console.log(`Le serveur fonctionne sur http://localhost:${port}`));
