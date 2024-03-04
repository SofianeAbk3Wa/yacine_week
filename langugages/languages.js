import express from 'express'

const languagesRouter = express.Router()

const languages = [
    {id: 1, name: 'Anglais', famille: 'Germanique'},
    {id: 2, name: 'Espagnol', famille: 'Romane'},
    {id: 3, name: 'Français', famille: 'Romane'},
    {id: 4, name: 'Allemand', famille: 'Germanique'}
]

languagesRouter.get('/langues', (req, res) => {
    res.json(languages)
})

languagesRouter.get('/langues/:id', (req, res) => {
    let {id} = req.params
    const langue = languages.find(langue => langue.id === parseInt(id))
    res.json(langue)
})

languagesRouter.post('/langues', (req, res) => {
    const langue = {
        id: languages.length + 1,
        name: req.body.name,
        famille: req.body.famille
    }
    languages.push(langue)
    res.json(langue)
})

languagesRouter.put('/langues/:id', (req,res) => {
    let {id} = req.params
    const langue = languages.find(langue => langue.id === parseInt(id))
    langue.name = req.body.name
    langue.famille = req.body.famille
    res.json(langue)
})

languagesRouter.delete('/langues/:id', (req,res) => {
    let {id} = req.params
    const langue = languages.find(langue => langue.id === parseInt(id))
    const langueId = languages.indexOf(langue)
    languages.splice(langueId, 1)
    res.json('Langue supprimée avec succès')
})

export default languagesRouter
