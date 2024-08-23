const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Project',{
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
        description:{
            type: DataTypes.STRING,
            allowNull: false
        },
        date:{
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    }, {timestamps: false})
}