import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const mongoDB ='mongodb+srv://admin:lI7VTtMkrTaDPejk@yacine-week.rwnonkm.mongodb.net/?retryWrites=true&w=majority&appName=yacine-week';

app.use(bodyParser.urlencoded({ extended: true })).use(express.json()).use(express.urlencoded({ extended: true }));

mongoose.connect(mongoDB);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
