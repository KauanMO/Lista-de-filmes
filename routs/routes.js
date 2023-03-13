const routes = require("express").Router()
const FilmeController = require("../controller/FilmeController")

routes.get("/", FilmeController.getAllFilmes)
routes.post("/create", FilmeController.createFilme)

module.exports = routes