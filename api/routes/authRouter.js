import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import User from '../models/user.js';

const authRouter = express.Router();


//? --------------------------------------------------------------------------------
//? REGISTER
//? --------------------------------------------------------------------------------
authRouter.post('/register', async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    try {
      const emailVerification = await User.findOne({ email: email });

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      //! ALREADY FIND
      if (emailVerification) {
        return res.json({ message: 'Email existe déjà' });
      }

      //* SUCCESS
      const newUser = await User.create({
        first_name,
        last_name,
        email,
        password: hashedPassword
      });

      return res.json(newUser);
    } catch (error) {
      return res.json({ error: error.message });
    }
});


//? --------------------------------------------------------------------------------
//? LOGIN
//? --------------------------------------------------------------------------------
authRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      const passwordMatch = await bcrypt.compare(password, user.password);
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

      //! MAIL NOT FIND
      if (!user) {
        return res.json({ message: 'Email ou mot de passe incorrect' });
      }

      //! WRONG PASSWORD
      if (!passwordMatch) {
        return res.json({ message: 'Email ou mot de passe incorrect' });
      }

      res.header('auth-token', token);
      return res.json({ message: 'Connexion réussie', token });

    } catch (error) {
      return res.json({ error: error.message });
    }
  });

export default authRouter;
