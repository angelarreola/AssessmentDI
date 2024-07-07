const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Asegúrate de importar tu modelo de Usuario

async function createDefaultAdmin() {
  try {
    // Verificar si ya existe un usuario administrador
    const admin = await User.findOne({ where: { role: 'admin' } });

    if (!admin) {
      // Crear el usuario administrador
      await User.create({
        name: 'admin',
        email: "admin@admin.com",
        password: await bcrypt.hash("password", 10),
        role: 'admin'
      });

      await User.create({
        name: 'admin2',
        email: "admin2@admin2.com",
        password: await bcrypt.hash("password", 10),
        role: 'admin',
        status: 'inactive'
      });

      console.log('Usuarios administradores creados con éxito.');
    } else {
      console.log('Ya existe un usuario administrador en la base de datos.');
    }
  } catch (error) {
    console.error('Error al crear usuario administrador:', error);
  }
}

module.exports = createDefaultAdmin;
