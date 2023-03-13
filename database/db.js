const mongoose = require("mongoose");

const connecToDb = () => {
    mongoose
    .connect(
        "mongodb+srv://root:admin@listadefilmes.fjy3csz.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(()=> console.log("MongoDB conectado"))
    .catch((err) => console.log(err));
};

module.exports = connecToDb;