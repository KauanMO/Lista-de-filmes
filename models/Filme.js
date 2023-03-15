const mongoose = require ('mongoose')

const FilmeSchema = new mongoose.Schema({
    filme: {
        type: String,
        require: true,
    },
    check: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("Filme", FilmeSchema)