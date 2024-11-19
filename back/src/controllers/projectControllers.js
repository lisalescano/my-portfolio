const {Project, Technology} = require('../db')

const newProject = async({name, description, date, technology})=>{
    const projectCreated = await Project.create({name, description, date})
    projectCreated.addTechnology(technology)
    return projectCreated
}

const getAllProjects = async ()=>{
    const allProjects = await Project.findAll()
    return allProjects
}

module.exports = {
    newProject, getAllProjects
}