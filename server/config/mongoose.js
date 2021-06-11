const mongoose = require('mongoose');
const db = "Exam";

mongoose.connect("mongodb://localhost/" + db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( () => console.log("Connected to " + db))
    .catch( err => console.log("Something went wrong! Oh teh noes!", err))

    // require("../models/Product");
