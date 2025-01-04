function getLivros(req, res) {
    try {
        res.send("Olá mundo da Aluda.")
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
    postLivros,
    patchLivros,
    deleteLivros
}