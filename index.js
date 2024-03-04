import express from 'express';
import languageRouter from './languages/languages.js';

const app = express()
const port = 8000


app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.listen(port, () => {
    console.log('Bienvenue.')
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/test', (req, res) => {
    res.send('Hello Test!')
})

app.use('/', languageRouter)