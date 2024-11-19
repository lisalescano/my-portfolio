const { newProject, getAllProjects } = require("../controllers/projectControllers")

const postNewProject = async(req, res)=>{
    const {name, description, date, technology} = req.body
    try {
        const response = await newProject({name, description, date, technology})
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getProjects = async(req, res) =>{
    try {
        const response = await getAllProjects()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports={
    postNewProject, getProjects
}