import express from 'express';
import LanguagesController from './languagesController.js';

const languagesRouter = express.Router();
const languagesController = new LanguagesController();

// GET: Récupérer toutes les langues
languagesRouter.get('/langues', (req, res) => {
    languagesController.getAllLanguages(req, res);
});

// GET: Récupérer une langue par ID
languagesRouter.get('/langues/:id', (req, res) => {
    languagesController.getLanguageById(req, res);
});

// POST: Créer une nouvelle langue
languagesRouter.post('/langues', (req, res) => {
    languagesController.createLanguage(req, res);
});

// PUT: Mettre à jour une langue par ID
languagesRouter.put('/langues/:id', (req, res) => {
    languagesController.updateLanguage(req, res);
});

// DELETE: Supprimer une langue par ID
languagesRouter.delete('/langues/:id', (req, res) => {
    languagesController.deleteLanguage(req, res);
});

export default languagesRouter;
