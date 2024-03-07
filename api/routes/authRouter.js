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
      //? CHECK EMAIL
      const emailVerification = await User.findOne({ email: email });

      //? SALT + HASH PASSWORD
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      //! EMAIL ALREADY FIND
      if (emailVerification) {
        return res.json({ message: 'Email existe déjà' });
      }

      //* SUCCESS => CREATE_USER
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
    //? CHECK EMAIL
      const user = await User.findOne({ email });

      //! EMAIL NOT EXIST
      if (!user) {
          return res.json({ message: 'Email ou mot de passe incorrect' });
      }

      //* SUCCESS => CHECK_PASSWORD
      const passwordMatch = await bcrypt.compare(password, user.password);
      console.log('passwordMatch: ' + passwordMatch);

      //! PASSWORD NOT MATCH
      if (!passwordMatch) {
          return res.json({ message: 'Email ou mot de passe incorrect' });
      }

      //* SUCCESS => CREATE_TOKEN + SEND_TOKEN_HEADER
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
      res.header('auth-token', token);

      return res.json({ message: 'Connexion réussie', token });

  } catch (error) {
      return res.json({ error: error.message });
  }
});


export default authRouter;
