const { Router } = require("express");
const { getLivros, postLivros, patchLivros, deleteLivros, getLivro } = require("../controllers/livro")
const router = Router()


router.get('/', getLivros)
router.get('/:id', getLivro)

router.post('/', postLivros)
router.patch('/', patchLivros)
router.delete('/', deleteLivros)


module.exports = router