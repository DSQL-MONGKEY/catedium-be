const express = require('express');
const catRoutes = require('./routes/catRoutes')
const app = express();

app.use(express.json());
app.use('/api/cat', catRoutes);

app.use((err, req, res, next) => {
   console.error(err.stack);
   res.status(500).send('Something broke!');
})

module.exports = app;