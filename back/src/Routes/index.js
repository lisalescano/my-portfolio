const {Router} = require("express");
const { getAllTechs, postNewTech } = require("../handlers/techHandlers");
const { getProjects } = require("../handlers/projectHandlers");

const router = Router()

router.get('/projects', getProjects)

router.get('/technologies', getAllTechs)

router.post('/technologies', postNewTech)

module.exports = router;