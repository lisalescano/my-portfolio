const {DataTypes} = require("sequelize")

module.exports= (sequelize)=>{
    sequelize.define('Technology', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        level:{
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min:1,
                max:5
            }
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {timestamps: false})
}