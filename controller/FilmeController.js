const Filme = require('../models/Filme')

const getAllFilmes = async (req, res) => {
    try{
        const filmeList = await Filme.find()
        return res.render("index", {filmeList})
    }catch(err){
        res.status(500).send({error: err.message})
    }
}

const createFilme = async (req, res) => {
    const filme = req.body;

    if(!filme){
        return res.redirect("/")
    }

    try{
        await Filme.create(filme)
        return res.redirect("/")
    }catch(err){
        res.status(500).send({error: err.message})
    }
}

module.exports = { getAllFilmes, createFilme }