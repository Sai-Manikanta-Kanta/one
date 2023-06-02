const cors = require('cors');
const express = require('express');
const mongoose = require('./connection');
const postRoutes = require('./routes');

const app = express();
app.use(cors());
const port = 5000;
app.use(express.json());
app.use('/', postRoutes);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});