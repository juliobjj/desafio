const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const routes = require('./routes');

mongoose.connect('mongodb://localhost:27017/crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify : false
});

const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(routes);

app.listen(PORT, () => console.log(`Listening PORT: ${PORT}`));
