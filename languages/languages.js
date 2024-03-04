import express from 'express';

const languagesRouter = express.Router();

const languages = [
    { id: 1, name: 'Anglais', famille: 'Germanique' },
    { id: 2, name: 'Espagnol', famille: 'Romane' },
    { id: 3, name: 'Français', famille: 'Romane' },
    { id: 4, name: 'Allemand', famille: 'Germanique' }
];

languagesRouter
    // GET: Récupérer toutes les langues
    .get('/langues', (req, res) => {
        res.json(languages);
    })

    // GET: Récupérer une langue par ID
    .get('/langues/:id', (req, res) => {
        let { id } = req.params;
        const langue = languages.find(langue => langue.id === parseInt(id));
        res.json(langue);
    })

    // POST: Créer une nouvelle langue
    .post('/langues', (req, res) => {
        const langue = {
            id: languages.length + 1,
            name: req.body.name,
            famille: req.body.famille
        };
        languages.push(langue);
        res.json(langue);
    })

    // PUT: Mettre à jour une langue par ID
    .put('/langues/:id', (req, res) => {
        let { id } = req.params;
        const langue = languages.find(langue => langue.id === parseInt(id));
        langue.name = req.body.name;
        langue.famille = req.body.famille;
        res.json(langue);
    })

    // DELETE: Supprimer une langue par ID
    .delete('/langues/:id', (req, res) => {
        let { id } = req.params;
        const langue = languages.find(langue => langue.id === parseInt(id));
        const langueId = languages.indexOf(langue);
        languages.splice(langueId, 1);
        res.json('Langue supprimée avec succès');
    });

export default languagesRouter;
