import express from 'express';
import User from '../models/user.js';

const userRouter = express.Router();

userRouter.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Erreur serveur');
    }
});

userRouter.post('/users', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Erreur serveur');
    }
});

export default userRouter;
