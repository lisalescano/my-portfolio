const { newTech, allTechs } = require("../controllers/techControllers")

const postNewTech = async(req, res)=>{
    const {name, level, image} = req.body
    try {
        const response = await newTech({name, level, image})
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getAllTechs = async(req, res)=>{
    try {
        const response = await allTechs()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports={postNewTech, getAllTechs}