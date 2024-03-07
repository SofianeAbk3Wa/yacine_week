import express from 'express';

import User from '../models/userModel.js';

const userRouter = express.Router();

//? --------------------------------------------------------------------------------
//? GET ALL USERS
//? --------------------------------------------------------------------------------

userRouter.get('/users', async (req, res) => {
    try {
        const users = await User.find();

        //! FIND BUT EMPTY
        if (users.length === 0) return res.json({ message: 'Aucun utilisateur existant.' });

        return res.json(users);

    } catch (error) {
        return res.json({ error: error.message });
    }
});


//? --------------------------------------------------------------------------------
//? GET BY ID USER
//? --------------------------------------------------------------------------------

userRouter.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);

        //! NOT FIND
        if (!user) return res.json({ message: 'Utilisateur non existant.' });

        return res.json(user);

    } catch (error) {
        return res.json({ error: error.message });
    }
});

//? --------------------------------------------------------------------------------
//? CREATE AN USER
//? --------------------------------------------------------------------------------

userRouter.post('/users', async (req, res) => {
    try {
        const newUser = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password
        });

        //! EMPTY FIELD
        if (!newUser) return res.json({ message: 'Un problème est survenu, veuillez reessayer. [CHAMPS: first_name, last_name, email, password]' });

        return res.json(newUser);

    } catch (error) {
        return res.json({ error: error.message });
    }
});


//? --------------------------------------------------------------------------------
//? UPDATE AN USER
//? --------------------------------------------------------------------------------

userRouter.put('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUser = await User.findByIdAndUpdate(id, {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password
        }, { new: true });

        //! NOT FIND
        if (!updatedUser) return res.json({ message: 'Utilisateur non existant.' });

        return res.json(updatedUser);

    } catch (error) {
        return res.json({ error: error.message });
    }
});


//? --------------------------------------------------------------------------------
//? DELETE AN USER
//? --------------------------------------------------------------------------------

userRouter.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedUser = await User.findByIdAndDelete(id);

        //! NOT FIND
        if (!deletedUser) return res.json({ message: 'Utilisateur non existant.' });

        //* SUCCESS
        return res.json({ message: 'Utilisateur supprimé.', deletedUser });

    } catch (error) {
        return res.json({ error: error.message });
    }
});

export default userRouter;
