import jwt from 'jsonwebtoken';

//? --------------------------------------------------------------------------------
//? AUTH MIDDLEWARE
//? --------------------------------------------------------------------------------
const authMiddleware = (req, res, next) => {

  //? GET TOKEN FROM HEADER
  const token = req.header('auth-token');

  //! TOKEN NOT EXIST
  if (!token) {
    return res.json({ message: 'Accès non autorisé.' });
  }

  try {
    //? CHECK TOKEN
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //* SUCCESS
    req.user = decoded;
    next();

  } catch (error) {
    return res.json({ message: 'Accès non autorisé. Jeton invalide.' });
  }
};

export default authMiddleware;
