const mongoose = require("mongoose");

const connecToDb = () => {
    mongoose
    .connect(
        process.env.DB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(()=> console.log("MongoDB conectado"))
    .catch((err) => console.log(err));
};

module.exports = connecToDb;