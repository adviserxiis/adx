require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');
const adviserRoutes = require('./routes/adviser');
const userRoutes = require('./routes/user');

const app = express();

app.use(bodyParser.json());

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

app.use('/auth', authRoutes);
app.use('/adviser', adviserRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log('Server is running on port ${PORT}');
});


