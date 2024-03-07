import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const token = req.header('auth-token');

  if (!token) {
    return res.json({ message: 'Accès non autorisé.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.json({ message: 'Accès non autorisé. Jeton invalide.' });
  }
};

export default authMiddleware;
