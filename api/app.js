import express, { urlencoded, json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import process from 'node:process';
import routes from './routes/index.js';

dotenv.config();

// App Config
const app = express();
const { PORT, MONGO_URI } = process.env;

// Middleware
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

// MongoDB connection
mongoose.connect(MONGO_URI)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(err => console.error('Erreur de connexion à MongoDB:', err));

// Routes
app.use('/', routes);

// Start server
app.listen(PORT, () => console.log(`Le serveur fonctionne sur http://localhost:${PORT}`));
