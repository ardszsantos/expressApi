const { Router } = require("express");
const { getLivros, postLivros, patchLivros, deleteLivros } = require("../controladores/livro")
const router = Router()


router.get('/', getLivros)
router.post('/', postLivros)
router.patch('/', patchLivros)
router.delete('/', deleteLivros)


module.exports = router