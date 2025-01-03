const { Router } = require("express");
const router = Router()


router.get('/', (req, res) => {
    try {
        res.send("Olá mundo")
    } catch (error) {
        res.status(500)
    }
});

router.post('/', (req, res) => {
    res.send("Você fez uma requisição do tipo POST")
})
router.patch('/', (req, res) => {
    res.send("Você fez uma requisição do tipo PATCH")
})
router.delete('/', (req, res) => {
    res.send("Você fez uma requisição do tipo PUT")
})

module.exports = router