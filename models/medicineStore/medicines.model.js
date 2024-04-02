const {DataTypes}=require('sequelize')
const dbConnection=require('../../config/Db/db')

const medicines=dbConnection.define('medicines',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    medicine: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    disease:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    miniAge:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    miniWeight:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    doseDuration:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    doseCost:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

medicines.sync()

module.exports=medicines;