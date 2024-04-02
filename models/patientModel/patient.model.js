const {DataTypes}=require('sequelize')
const dbConnection=require('../../config/Db/db')

const patientModel=dbConnection.define('patient',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    emailAddress: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    chronicDisease1:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    chronicDisease2:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    chronicDisease3:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    YOB:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    salt:{
        type: DataTypes.STRING,
        allowNull:false
    }

})

patientModel.sync();

module.exports=patientModel;