const express=require('express')
const {catchErrors}=require('../handlers/errorHandlers')
const authController=require('../controllers/authController/auth.Controller')
const patient=require('../controllers/appController/patientTrial')

const router=express.Router();

router.route('/patient/create').post(catchErrors(authController.register))

    router.route('/patient/login').post(catchErrors(authController.login))

router.route('/patient/logout').get(catchErrors(authController.logout))


module.exports=router;