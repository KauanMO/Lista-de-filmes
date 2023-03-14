const routes = require("express").Router()
const FilmeController = require("../controller/FilmeController")

routes.get("/", FilmeController.getAllFilmes)
routes.post("/create", FilmeController.createFilme)
routes.get("/getById/:id", FilmeController.getById);
routes.post("/update/:id", FilmeController.updateFilme)

module.exports = routes