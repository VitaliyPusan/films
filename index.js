const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Import film scheme
require('./models/Film');

//Import film routes
require('./routes/filmRoutes')(app);

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost:27017/films`, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});