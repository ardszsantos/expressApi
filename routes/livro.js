const { Router } = require("express");
const router = Router()


router.get('/', (req, res) => {
    res.send("Olá mundo")
});

router.post('/', (req, res) => {
    res.send("Você fez uma requisição do tipo POST")
})
router.patch('/', (req, res) => {
    res.send("Você fez uma requisição do tipo PATCH")
})
router.delte('/', (req, res) => {
    res.send("Você fez uma requisição do tipo PUT")
})

module.exports = router