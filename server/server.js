const express = require('express');
const app = express();
const port =8000;


require('./config/mongoose');
const cors = require('cors');


app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new



require('./routes/routes')(app);
app.listen(port, () => console.log(`Listening on port: ${port}`));
