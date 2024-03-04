import express from 'express';
import languageRouter from './languages/languages.js';

import path from 'node:path';
import process from 'node:process';

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.use('/', languageRouter);

app.listen(port, () => {
    console.log('Bienvenue.');
});