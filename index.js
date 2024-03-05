import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routes from './routes/index.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const mongoDB ='mongodb+srv://admin:lI7VTtMkrTaDPejk@yacine-week.rwnonkm.mongodb.net/?retryWrites=true&w=majority&appName=yacine-week';

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));

mongoose.connect(mongoDB)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/', routes);
