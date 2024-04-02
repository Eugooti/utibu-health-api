const express=require('express')
const orderController=require('../controllers/appController/orders.controller')
const medicineController=require('../controllers/appController/medicines.controller')
const {catchErrors}=require('../handlers/errorHandlers')

const router=express.Router();


//Medicine specific routes
router.route('/medicine/readAll').get(catchErrors(medicineController.read))
router.route('/medicine/readById/:id').get(catchErrors(medicineController.readById))
router.route(`/medicine/readByUser/:user`).get(catchErrors(medicineController.readByUser))
router.route('/medicine/create').post(catchErrors(medicineController.create))
router.route('/medicine/createMany').post(catchErrors(medicineController.createMany))
router.route('/medicine/update').put(catchErrors(medicineController.update))
router.route('/medicine/delete').delete(catchErrors(medicineController.delete))


//Order specific route
router.route('/order/readAll').get(catchErrors(orderController.read))
router.route('/order/readById/:id').get(catchErrors(orderController.readById))
router.route('/order/readByUser/:user').get(catchErrors(orderController.readByUser))
router.route('/order/create').post(catchErrors(orderController.create))
router.route('/order/createMany').post(catchErrors(orderController.createMany))
router.route('/order/update/:id').put(catchErrors(orderController.update))
router.route('/order/delete/:id').delete(catchErrors(orderController.delete))


module.exports=router;
