const fs = require("fs")
const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletaLivro } = require("../services/livro")

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

        if (id && Number(id)) {
            const livros =  getLivroPorId(id)
            res.send(livros)
        } else {
            res.status(422)
            res.send("O id precisa ser um número")
        }



    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body
        insereLivro(livroNovo)
        res.status(201)
        res.send("Livro inserido com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

    res.send("Você fez uma requisição do tipo POST")
}

function patchLivros(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const body = req.body
            modificaLivro(body, id)
            res.send("Livro modificado com sucesso")
        } else {
            res.status(422)
            res.send("O id precisa ser um número")
        }
        


    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivros(req, res) {
    try {
        const id = req.params.id
        deletaLivro(id)
        res.send("Livro deletado com sucesso.")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

    res.send("Você fez uma requisição do tipo DELETE")


}




module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivros,
    deleteLivros
}