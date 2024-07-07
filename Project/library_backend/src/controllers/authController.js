const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken')
require('dotenv').config();

module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const userForToken = {
        id: user.id,
        email: user.email
      }

      const token = jwt.sign(userForToken, process.env.SECRET_KEY, { expiresIn: '1h' });
      res.status(200).json({ token, user: user });
    } catch (error) {
      res.status(500).json({ message: 'Error logging in' });
    }
}