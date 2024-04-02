const patient=require('../../models/patientModel/patient.model')
const {authMethods}=require('../../middleware/authMiddleware/auth.middleware')

module.exports=authMethods(patient)