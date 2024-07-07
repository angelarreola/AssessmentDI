const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next) => {
  const authorization = req.get('authorization');

  let token = null;
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7);
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    if (!token || !decodedToken.id) {
      return res.status(401).json({ message: 'Token missing or invalid' });
    }
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token invalid' });
  }
};

module.exports = authMiddleware;
