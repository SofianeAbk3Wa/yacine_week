    import express from 'express';
    import LanguagesController from './languagesController.js';

    const languagesRouter = express.Router();
    const languagesController = new LanguagesController();

    // GET: Récupérer toutes les langues
    languagesRouter.get('/languages', (req, res) => {
        languagesController.getAllLanguages(req, res);
    });

    // GET: Récupérer une langue par ID
    languagesRouter.get('/languages/:id', (req, res) => {
        languagesController.getLanguageById(req, res);
    });

    // GET: Afficher le formulaire pour ajouter une langue
    languagesRouter.get('/addlanguage', (req, res) => {
        languagesController.getLanguageAddForm(req, res);
    });

    // POST: Créer une nouvelle langue
    languagesRouter.post('/languages', (req, res) => {
        languagesController.createLanguage(req, res);
    });

    // PUT: Mettre à jour une langue par ID
    languagesRouter.put('/languages/:id', (req, res) => {
        languagesController.updateLanguage(req, res);
    });

    // DELETE: Supprimer une langue par ID
    languagesRouter.delete('/languages/:id', (req, res) => {
        languagesController.deleteLanguage(req, res);
    });

    export default languagesRouter;
