const fs = require("fs")
const { getTodosLivros, getLivroPorId } = require("../services/livro")

function getLivros(req, res) {
    try {
        const livros =  getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id
        const livros =  getLivroPorId(id)
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
function postLivros(req, res) {
    res.send("Você fez uma requisição do tipo POST")
}

function patchLivros(req, res) {
    res.send("Você fez uma requisição do tipo PATCH")
}

function deleteLivros(req, res) {
    res.send("Você fez uma requisição do tipo DELETE")

}




module.exports = {
    getLivros,
    getLivro,
    postLivros,
    patchLivros,
    deleteLivros
}