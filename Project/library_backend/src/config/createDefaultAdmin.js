const bcrypt = require("bcryptjs");
const User = require("../models/User"); // Asegúrate de importar tu modelo de Usuario

async function createDefaultAdmin() {
  try {
    // Verificar si ya existe un usuario administrador
    const admin = await User.findOne({ where: { role: "admin" } });

    if (!admin) {
      // Crear el usuario administrador
      await User.create({
        name: "admin",
        email: "admin@admin.com",
        password: await bcrypt.hash("password", 10),
        role: "admin",
      });

      await User.create({
        name: "admin2",
        email: "admin2@admin2.com",
        password: await bcrypt.hash("password", 10),
        role: "admin",
        status: "inactive",
      });

      await User.create({
        name: "Ángel Arreola",
        email: "angelarreolagg@gmail.com",
        password: await bcrypt.hash("12345", 10),
      });

      await User.create({
        name: "Carlos Martínez",
        email: "carlosmartinez@example.com",
        password: await bcrypt.hash("securepassword1", 10),
      });

      await User.create({
        name: "Luis Hernández",
        email: "luishernandez@example.com",
        password: await bcrypt.hash("mypassword123", 10),
      });

      await User.create({
        name: "María García",
        email: "mariagarcia@example.com",
        password: await bcrypt.hash("password456", 10),
      });

      await User.create({
        name: "Elena Fernández",
        email: "elenafernandez@example.com",
        password: await bcrypt.hash("pass789word", 10),
      });

      await User.create({
        name: "Jorge Rodríguez",
        email: "jorgerodriguez@example.com",
        password: await bcrypt.hash("password321", 10),
      });

      console.log("Usuarios administradores creados con éxito.");
    } else {
      console.log("Ya existe un usuario administrador en la base de datos.");
    }
  } catch (error) {
    console.error("Error al crear usuario administrador:", error);
  }
}

module.exports = createDefaultAdmin;
