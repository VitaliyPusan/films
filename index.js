const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Import film scheme
require('./models/Film');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/films`);

app.use(bodyParser.json());

// Import film routes
require('./routes/filmRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});