const orderModel=require('../../models/ordersModel/orders.model');
const {CRUDMethods}=require('../../middleware/CRUDMiddlewares/CRUD.middleware');

module.exports=CRUDMethods(orderModel);