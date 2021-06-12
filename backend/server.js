const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { PORT, ATLAS_URI } = require('./config');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(ATLAS_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('mongodb-connection-established');
});

const ReviewRouter = require('./routes/ReviewRouter');

app.use('/reviews', ReviewRouter);

app.listen(PORT || 5000, () => {
    console.log(`server_running-port-${PORT || 5000}`);
});