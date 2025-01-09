const { Router } = require("express");
const { getLivros, postLivro , patchLivros, deleteLivros, getLivro } = require("../controllers/livro")
const router = Router()


router.get('/', getLivros)
router.get('/:id', getLivro)

router.post('/', postLivro)
router.patch('/:id', patchLivros)
router.delete('/:id', deleteLivros)


module.exports = router