const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    // const authorization = req.get('authorization');

    // let token = null;
    // if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    //   token = authorization.substring(7);
    // }

    // const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    // console.log(decodedToken);
    // if (!token || !decodedToken.id) {
    //   return res.status(401).json({ message: 'Token missing or invalid' });
    // }
    try {
      const user =  await User.create({ name, email, password: hashedPassword, role: "user" });
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error creating user' });
    }
  };

module.exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
        console.log(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users' });
    }
}

module.exports.getUser = async (req, res) => {
  const { id } = req.params;
  try {
      const user = await User.findByPk(id);
      res.status(200).json(user);
      console.log(user);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching users' });
  }
}

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password, status } = req.body;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      user.name = name;
      user.email = email;
      user.password = password;
      user.status = status;

      await user.save();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error updating user' });
    }
  };
  
  exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      await user.destroy();
      res.status(200).json({ message: 'User deleted' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting user' });
    }
  };