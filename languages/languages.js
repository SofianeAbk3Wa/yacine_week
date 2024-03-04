import express from 'express';

const languagesRouter = express.Router();
const languages = [
    { id: 1, name: 'Anglais', famille: 'Germanique' },
    { id: 2, name: 'Espagnol', famille: 'Romane' },
    { id: 3, name: 'Français', famille: 'Romane' },
    { id: 4, name: 'Allemand', famille: 'Germanique' }
];

languagesRouter.route('/languages')
    .get((req, res) => {
        res.json(languages);
    })
    .post((req, res) => {
        const { name, famille } = req.body;
        const language = {
            id: languages.length + 1,
            name,
            famille
        };
        languages.push(language);
        res.json(language);
    });

languagesRouter.route('/languages/:id')
    .get((req, res) => {
        const { id } = req.params;
        const language = languages.find(langue => langue.id === parseInt(id));
        res.json(language);
    })
    .put((req, res) => {
        const { id } = req.params;
        const language = languages.find(langue => langue.id === parseInt(id));
        const { name, famille } = req.body;
        language.name = name;
        language.famille = famille;
        res.json(language);
    })
    .delete((req, res) => {
        const { id } = req.params;
        const language = languages.find(langue => langue.id === parseInt(id));
        const languageIndex = languages.indexOf(language);
        languages.splice(languageIndex, 1);
        res.json('Langue supprimée avec succès');
    });

export default languagesRouter;
