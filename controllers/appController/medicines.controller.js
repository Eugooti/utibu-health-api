const medicines=require('../../models/medicineStore/medicines.model')
const {CRUDMethods}=require('../../middleware/CRUDMiddlewares/CRUD.middleware')

module.exports=CRUDMethods(medicines)