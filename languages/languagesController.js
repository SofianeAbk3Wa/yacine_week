class LanguagesController {
    constructor() {
        this.languages = [
            { id: 1, name: 'Anglais', famille: 'Germanique' },
            { id: 2, name: 'Espagnol', famille: 'Romane' },
            { id: 3, name: 'Français', famille: 'Romane' },
            { id: 4, name: 'Allemand', famille: 'Germanique' }
        ];
    }

    // GET: Récupérer toutes les langues
    getAllLanguages(req, res) {
        res.render('languages', { languages: this.languages });
    }


    // GET: Récupérer une langue par ID
    getLanguageById(req, res) {
        let { id } = req.params;
        const langue = this.languages.find(langue => langue.id === parseInt(id));
        res.json(langue);
    }

    // GET: Afficher le formulaire pour ajouter une langue
    getLanguageAddForm(req, res) {
        res.render('addLanguage');
    }

    // POST: Créer une nouvelle langue
    createLanguage(req, res) {
        const { name, famille } = req.body;
        const newLanguage = {
            id: this.languages.length + 1,
            name,
            famille
        };
        this.languages.push(newLanguage);
        res.render('languages', { languages: this.languages });
    }

    // PUT: Mettre à jour une langue par ID
    updateLanguage(req, res) {
        let { id } = req.params;
        const { name, famille } = req.body;
        const langueToUpdate = this.languages.find(langue => langue.id === parseInt(id));
        if (langueToUpdate) {
            langueToUpdate.name = name;
            langueToUpdate.famille = famille;
            res.json(langueToUpdate);
        } else {
            res.status(404).send('Langue non trouvée');
        }
    }

    // DELETE: Supprimer une langue par ID
    deleteLanguage(req, res) {
        let { id } = req.params;
        const languageToDelete = this.languages.find(langue => langue.id === parseInt(id));
        if (languageToDelete) {
            const languageIndex = this.languages.indexOf(languageToDelete);
            this.languages.splice(languageIndex, 1);
            res.json('Langue supprimée avec succès');
        } else {
            res.status(404).send('Langue non trouvée');
        }
    }
}

export default LanguagesController;
