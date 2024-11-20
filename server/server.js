const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = 3000;
const MONGO_URI = 'mongodb://mongodb:27017/mean-contacts';

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Роуты
app.use('/api', apiRoutes);

// Подключение к MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Запуск сервера
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
