import express from 'express';
import User from '../models/user.js';

const userRouter = express.Router();

userRouter.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.log(err.message);
    }
});

userRouter.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        res.json(user);
    } catch (err) {
        console.log(err.message);
    }
});


userRouter.post('/users', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } catch (err) {
        console.log(err.message);
    }
});

export default userRouter;
