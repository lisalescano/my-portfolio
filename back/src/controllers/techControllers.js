const {Technology} = require('../db')

const newTech = async ({name, level, image})=>{
    const learnedTech = await Technology.create({name, level, image})
    return learnedTech
}

const allTechs = async()=>{
    const techs = await Technology.findAll()
    return techs
}

module.exports={
    newTech, allTechs
}