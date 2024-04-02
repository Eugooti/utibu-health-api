const medicines=require('../../models/patientModel/patient.model')
const {CRUDMethods}=require('../../middleware/CRUDMiddlewares/CRUD.middleware')

module.exports=CRUDMethods(medicines)