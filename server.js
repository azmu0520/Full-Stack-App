const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect Db
connectDB();
app.use(express.json({ extended: false }));
const PORT = process.env.PORT || 5000;

app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));

app.get('/', (req, res) => res.send('API is working'));

app.listen(PORT, () => console.log('PORT is running  '));
