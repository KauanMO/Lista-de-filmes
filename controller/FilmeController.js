const Filme = require('../models/Filme')

let mensagem = ""
let type = ""

const getAllFilmes = async (req, res) => {
    try {
        const filmeList = await Filme.find()
        return res.render("index", { filmeList, filme: null, mensagem, type })
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
}

const createFilme = async (req, res) => {
    const filme = req.body;

    if (!filme.filme) {
        mensagem = "Informe um filme"
        type = "erro"
        return res.redirect("/")
    }
    try {
        await Filme.create(filme)
        mensagem = "Filme adicionado"
        type = "sucesso"
        return res.redirect("/")
    } catch (err) {
        res.status(500).send({ error: err.message })
    }


}

const getById = async (req, res) => {
    try {
        const filmeList = await Filme.find()

        const filme = await Filme.findOne({ _id: req.params.id });

        res.render("index", { filme, filmeList, mensagem, type });

    } catch (err) {
        res.status(500).send({ error: err.message })
    }
}

const updateFilme = async (req, res) => {
    try {
        const filme = req.body;
        await Filme.updateOne({ _id: req.params.id }, filme)
        mensagem = "Filme atualizado"
        type = "sucesso"

        res.redirect("/")
    } catch (err) {
        res.status(500).send({ error: err.message })
    }

}

module.exports = { getAllFilmes, createFilme, getById, updateFilme }