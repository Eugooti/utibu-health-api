const {DataTypes}=require('sequelize')
const dbConnection=require('../../config/Db/db')

const OrderModel=dbConnection.define('orders',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    customerEmail:{
        type:DataTypes.STRING,
        allowNull: false
    },
    medicine:{
        type:DataTypes.STRING,
        allowNull:false
    },
    cost:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    paymentStatus:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        default:false
    },
    collectionStatus:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        default: false
    }

})

OrderModel.sync()

module.exports=OrderModel