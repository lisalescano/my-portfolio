const {Router} = require("express");
const { getAllTechs, postNewTech } = require("../handlers/techHandlers");

const router = Router()

router.get('/technologies', getAllTechs)

router.post('/technologies', postNewTech)

module.exports = router;