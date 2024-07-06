const express = require('express');
const app = express();
const apiRoutes = require('./api/index');
const sequelize = require('./config/database');
const cors = require('cors')
const createDefaultAdmin = require('./config/createDefaultAdmin')

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST"]
}));
app.use('/api', apiRoutes);

sequelize.sync().then(() => {
  app.listen(3000, async () => {
    console.log('Server is running on port 3000');
    await createDefaultAdmin(); // Llama la función para crear el usuario administrador al iniciar
  });
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});
