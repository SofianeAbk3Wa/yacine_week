import express, { urlencoded, json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import process from 'node:process';

import userRouter from './routes/userRouter.js';
import postRouter from './routes/postRouter.js';
import authRouter from './routes/authRouter.js';

//? --------------------------------------------------------------------------------
//? INITIALISATION
//? --------------------------------------------------------------------------------
dotenv.config();
const app = express();
const { PORT, MONGO_URI } = process.env;
const router = express.Router();

//? --------------------------------------------------------------------------------
//? MIDDLEWARE
//? --------------------------------------------------------------------------------
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

//? --------------------------------------------------------------------------------
//?  ROUTES
//? --------------------------------------------------------------------------------


app.use('/', userRouter, postRouter, authRouter);

router.get('/', (req, res) => {
    res.send('INDEX ROUTE');
});


//? --------------------------------------------------------------------------------
//? CONNECTION TO MONGODB
//? --------------------------------------------------------------------------------
mongoose.connect(MONGO_URI)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(err => console.error('Erreur de connexion à MongoDB:', err));


//? --------------------------------------------------------------------------------
//? LAUNCH SERVER
//? --------------------------------------------------------------------------------
app.listen(PORT, () => console.log(`Le serveur fonctionne sur http://localhost:${PORT}`));

export default router;