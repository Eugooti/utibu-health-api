const orderModel=require('./ordersModel/orders.model');
const patient=require('./patientModel/patient.model');
const medicines=require('./medicineStore/medicines.model')


const tablesSync = async () => {
  try {
      await patient.sync();
      await orderModel.sync();
      await medicines.sync()
      console.log('Database models synchronized with the database.');
      return true

  }catch (e) {
      console.error(e);
      return false;
  }
}



module.exports={tablesSync};